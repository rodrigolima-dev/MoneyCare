import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Container, Type, IconView, TypeText, ValueText} from './styles'

export default function HistoryList({data}) {
 return (
   <Container>
    <Type>
      <IconView type={data.type}>

        <Icon 
        name={data.type === 'expense' ? 'arrow-down' : 'arrow-up'}
        color='#fff' 
        size={20}/>
        <TypeText>{data.type}</TypeText>

      </IconView>
    </Type>

    <ValueText>R$ {data.value}</ValueText>
   </Container>
  );
}