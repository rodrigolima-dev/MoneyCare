import React, { useState } from "react";
import {Background, Container, Logo, Input, 
SendButton, SendText, Link, TextLink} from './styles'
import { useNavigation } from "@react-navigation/native";
import { Platform } from "react-native";


export default function SignIn () {
    const navigation = useNavigation()
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