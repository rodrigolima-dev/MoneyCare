import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, Text, View } from 'react-native';
import Routes from './src/routes';
import AuthProvider from './src/contexts/auth';




export default function MoneyCare() {
    return (
        <NavigationContainer>
            <AuthProvider>
                <StatusBar backgroundColor="#131313" barStyle="light-content"/>
                <Routes/>
            </AuthProvider>
        </NavigationContainer>
    );
}