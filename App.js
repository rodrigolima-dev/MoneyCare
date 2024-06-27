import { NavigationContainer } from '@react-navigation/native';
import { StatusBar, Text, View } from 'react-native';
import Routes from './src/routes';

export default function BudgetBuddy_() {
    return (
        <NavigationContainer>
            <StatusBar backgroundColor="#131313" barStyle="light-content"/>
            <Routes/>
        </NavigationContainer>
    );
}