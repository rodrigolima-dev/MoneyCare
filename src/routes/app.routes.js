import 'react-native-gesture-handler';
import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../pages/Home";
import New from '../pages/New';
import Profile from '../pages/Profile';
import Ionicons from 'react-native-vector-icons/Ionicons'



const AppTab = createBottomTabNavigator();

export default function AppRoutes () {
    return(
        <AppTab.Navigator
        screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
                let iconName;

                if (route.name === 'Home') {
                    iconName = focused
                    ? 'home'
                    : 'home-outline'
                } else if (route.name === 'New') {
                    iconName = focused
                    ? 'duplicate'
                    : 'duplicate-outline'
                } else if(route.name === 'Profile') {
                    iconName = focused
                    ? 'person'
                    : 'person-outline'
                }

                return <Ionicons name={iconName} size={size} color={color}/>
            },
            tabBarActiveTintColor: '#007BFF',
            tabBarInactiveTintColor: 'gray'
        })}
        >

            <AppTab.Screen
            name='Home'
            component={Home}
            />

            <AppTab.Screen
            name='New'
            component={New}
            />

            <AppTab.Screen
            name='Profile'
            component={Profile}
            />
        </AppTab.Navigator>
    )
}