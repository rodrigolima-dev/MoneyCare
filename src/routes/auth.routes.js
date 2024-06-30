import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";


const AuthStack = createNativeStackNavigator();

export default function AuthRoutes () {
    return(
        <AuthStack.Navigator>
            <AuthStack.Screen
            name="SignIn"
            component={SignIn}
            options={{headerShown: false}}
            />

            <AuthStack.Screen
            name="SignUp"
            component={SignUp}
            options={{
                contentStyle: {
                    borderTopColor: '#FFF',
                    borderTopWidth: 3,
                },
                headerStyle: {
                    backgroundColor: '#007BFF'
                },
                headerTintColor: '#fff',
                headerBackTitleVisible: false,
                headerTitle: 'Back'
            }}
            />
        </AuthStack.Navigator>
    )
}