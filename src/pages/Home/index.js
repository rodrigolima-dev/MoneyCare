import { View, Text, Button } from 'react-native';
import { AuthContext } from '../../contexts/auth';
import { useContext, useState } from 'react';
import {Background, Container, Name, Sale, Title, List} from './styles'
import HistoryList from '../../components/HistoryList';

export default function Home() {
  const { user } = useContext(AuthContext)
  const [history, setHistory] = useState([
    {key: 1, type: 'income', value: 1800},
    {key: 2, type: 'expense', value: 100},
    {key: 3, type: 'income', value: 50},
  ])

  return (
    <Background>
      <Container>
        <Name>{user && user.name}</Name>
        <Sale>R$ 300,00</Sale>
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