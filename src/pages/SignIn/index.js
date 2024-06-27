import React, { useState, useContext } from "react";
import {Background, Container, Logo, Input, 
SendButton, SendText, Link, TextLink} from './styles'
import { useNavigation } from "@react-navigation/native";
import { Alert, Platform } from "react-native";
import {AuthContext} from "../../contexts/auth";


export default function SignIn () {
    const navigation = useNavigation()
    const { user } = useContext(AuthContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    return(
        <Background>
            <Container
            behavior={Platform.OS ? 'padding' : ''}
            enabled
            >
                <Logo
                source={require('../../assets/Logo.png')}
                />

                <Input
                placeholder="Email"
                autoCorrect={false}
                autoCapitalize="none"
                value={email}
                onChangeText={(email) => setEmail(email)}
                />

                <Input
                placeholder="Password"
                autoCorrect={false}
                autoCapitalize="none"
                value={password}
                onChangeText={(password) => setPassword(password)}
                />

                <SendButton>
                    <SendText>SignIn</SendText>
                </SendButton>

                <Link onPress={() => navigation.navigate('SignUp')}>
                    <TextLink>Create an account</TextLink>
                </Link>
            </Container>
        </Background>
    )
}