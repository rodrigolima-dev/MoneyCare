import { View } from 'react-native';
import {Container, Name, NewLink, Logout, LogoutText, NewText} from './styles.js'
import { useContext } from 'react';
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from '../../contexts/auth.js';


export default function Profile() {
  const navigation = useNavigation();
  const { user, SignOut } = useContext(AuthContext)
  return (
    <Container>
        <Name> {user && user.name} </Name>
        <NewLink onPress={() => navigation.navigate('New')}>
          <NewText>Register expenses</NewText>
        </NewLink>

        <Logout onPress={() => SignOut()}>
          <LogoutText>Exit</LogoutText>
        </Logout>
    </Container>
  );
}