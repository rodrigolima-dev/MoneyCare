import {SafeAreaView, Keyboard, TouchableWithoutFeedback, Alert } from 'react-native';
import {Background, Input, SubmitButton, SubmitText} from './styles'
import Picker from '../../components/Picker';
import { useState, useContext } from 'react';
import app from '../../services/firebaseConnection'
import { get, getDatabase, onValue, push, ref, set, update } from 'firebase/database';
import { getAuth } from 'firebase/auth';
import { format, parse } from 'date-fns';
import {useNavigation} from '@react-navigation/native'
import { AuthContext } from '../../contexts/auth';

export default function Registry() {
  const navigation = useNavigation()
  const [value, setValue] = useState('')
  const [type, setType] = useState('income')
  const { user } = useContext(AuthContext)
  const db = getDatabase(app)
  const auth = getAuth(app)

  function handleSubmit() {
    Keyboard.dismiss();
    if(isNaN(parseFloat(value)) || type == null) {
      alert('Fill out all the fields.')
      return
    }

    Alert.alert(
      'Confirming data',
      `Type ${type} - Value R$${parseFloat(value)}`,
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text: 'Continue',
          onPress: () => handleAdd()
        }
      ]
    )
  }

  async function handleAdd() {
    //Pegando uid do context.
    let uid = user.uid
    await push(ref(db,`history/${uid}`), {
      type: type,
      value: parseFloat(value),
      date: format(new Date(), 'dd/MM/yy')
    })

    //Atualizando saldo
    let userRef = ref(db, `users/${uid}`)
    onValue(userRef, (snapshot) => {
      let sale = parseFloat(snapshot.val().sale)
      type === 'income' ? sale += parseFloat(value) : sale -= parseFloat(value)

      update(userRef, {
        sale: sale
      })
      .then(() => {
        setValue('')
        Keyboard.dismiss();
        navigation.navigate('Home')
      })
    }, {
      onlyOnce: true
    })

  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <Background>

        <SafeAreaView style={{alignItems: 'center'}}>
          <Input
          placeholder='value'
          keyboardType='numeric'
          returnKeyType='next'
          onSubmitEditing={() => Keyboard.dismiss()}
          value={value}
          onChangeText={(value) => setValue(value)}
          />

          <Picker onChange={setType} type={type}/>


          <SubmitButton onPress={() => handleSubmit()}>
            <SubmitText>Registry</SubmitText>
          </SubmitButton>
          
        </SafeAreaView>
      </Background>
    </TouchableWithoutFeedback>
    );
}