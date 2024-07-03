import { AuthContext } from '../../contexts/auth';
import { useContext, useEffect, useState } from 'react';
import {Background, Container, Name, Sale, Title, List} from './styles'
import HistoryList from '../../components/HistoryList';
import app from '../../services/firebaseConnection';
import { equalTo, getDatabase, limitToLast, onValue, orderByChild, query, ref, remove, update } from 'firebase/database';
import { format, isPast } from 'date-fns';
import { Alert } from 'react-native';

export default function Home() {
  const [sale, setSale] = useState()
  const [history, setHistory] = useState([])
  
  const { user } = useContext(AuthContext)
  const db = getDatabase(app)
  const uid = user && user.uid
  let historyRef = ref(db, `history/${uid}`)
  let usersRef = ref(db, `users/${uid}`)
  
  useEffect(() => {
    async function loadList() {
      await onValue(ref(db, `users/${uid}`),  (snapshot) => {
        setSale(snapshot.val().sale);
      });
    

      let today = format(new Date(), 'dd/MM/yy'); 
      let historyQuery = query(historyRef, orderByChild('date'),equalTo(today),
      limitToLast(10))
      
      await onValue(historyQuery, (snapshot) => {
        setHistory([])
        
        snapshot.forEach((childItem) => {
          let list = {
            key: childItem.key,
            type: childItem.val().type,
            value: childItem.val().value,
            date: childItem.val().date
          };
          setHistory(oldArray => [...oldArray, list].reverse())
        })
    });
  }



    loadList()
  },[])

  function handleDelete (data) {
    if(isPast(new Date(data.date))) {
      //Se a data do registro já passou, entra aqui.
      alert("You can't delete an old registry")
    }

    Alert.alert(
      'Atention!',
      `You want to delete ${data.type} - Value: ${data.value}`,
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text: 'Continue',
          onPress: () => handleDeleteSuccess(data)
        }
      ]
    )
  }

  async function handleDeleteSuccess(data) {
    const recordRef = ref(db, `history/${uid}/${data.key}`);
    remove(recordRef)
    .then(async () => {
      let currentSale = sale;
      data.type === 'expense' ? currentSale += parseFloat(data.value) : 
      currentSale -= parseFloat(data.value)

      update(usersRef, {
        sale: currentSale
      })
    })
    .catch((error) => {
      alert(error)
    })
  }

  return (
    <Background>
      <Container>
        <Name>{user && user.name}</Name>
        <Sale>R$ {parseFloat(sale).toFixed(2)}</Sale>
      </Container>

      <Title>Recent transactions</Title>

      <List
      showsVerticalScrollIndicator = {false}
      data={history}
      keyExtractor={item => item.key}
      renderItem={({item}) => ( <HistoryList data={item} deleteItem={handleDelete}/>)}
      />
    </Background>
    );
}