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
                    borderTopColor: '#00b94a',
                    borderTopWidth: 3,
                },
                headerStyle: {
                    backgroundColor: '#131313'
                },
                headerTintColor: '#fff',
                headerBackTitleVisible: false,
                headerTitle: 'Back'
            }}
            />
        </AuthStack.Navigator>
    )
}