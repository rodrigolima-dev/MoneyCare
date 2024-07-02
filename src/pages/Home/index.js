import { View, Text, Button } from 'react-native';
import { AuthContext } from '../../contexts/auth';
import { useContext, useEffect, useState } from 'react';
import {Background, Container, Name, Sale, Title, List} from './styles'
import HistoryList from '../../components/HistoryList';
import app from '../../services/firebaseConnection';
import { get, getDatabase, limitToLast, onValue, orderByChild, query, ref } from 'firebase/database';

export default function Home() {
  const [sale, setSale] = useState()
  const [history, setHistory] = useState([])
  
  
  const { user } = useContext(AuthContext)
  const db = getDatabase(app)
  const uid = user && user.uid
  
  useEffect(() => {
    async function loadList() {
      await onValue(ref(db, `users/${uid}`),  (snapshot) => {
        setSale(snapshot.val().sale);
      });
    

      let historyRef = ref(db, `history/${uid}`)
      let historyQuery = query(historyRef, orderByChild('date'), limitToLast(10))
      
      await onValue(historyQuery, (snapshot) => {
        setHistory([])
        
        snapshot.forEach((childItem) => {
          let list = {
            key: childItem.key,
            type: childItem.val().type,
            value: childItem.val().value
          };
          setHistory(oldArray => [...oldArray, list].reverse())
        })
    });
  }



    loadList()
  },[])

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
      renderItem={({item}) => ( <HistoryList data={item}/>)}
      />
    </Background>
    );
}