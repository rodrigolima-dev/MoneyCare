import { View, Text, Button } from 'react-native';
import { AuthContext } from '../../contexts/auth';
import { useContext } from 'react';

export default function Home() {
  const { user, SignOut } = useContext(AuthContext)

  return (
    <View>
      <Text>OLá</Text>
      <Text>{user.name}</Text>
      <Button
      title='Exit account'
      onPress={() => SignOut()}
      />

    </View>
    );
}