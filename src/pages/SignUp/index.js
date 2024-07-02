import React, { useContext, useState } from "react";
import {Background, Container, Input, 
SendButton, SendText} from '../SignIn/styles'
import { AuthContext } from "../../contexts/auth";
import { ActivityIndicator } from "react-native";

export default function SignUp () {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { signUp, loadingAuth } = useContext(AuthContext)

    function handleSignUp () {
        signUp(email, password, name)
    }
    return(
        <Background>
            <Container
            behavior={Platform.OS ? 'padding' : ''}
            enabled
            >
                <Input
                placeholder="Name"
                autoCorrect={false}
                autoCapitalize="words"
                value={name}
                onChangeText={(name) => setName(name)}
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

                <SendButton onPress={handleSignUp}>
                    {
                        loadingAuth ? (
                            <ActivityIndicator size={20} color="#fff"/>
                        ) : (
                            <SendText>SignUp</SendText>
                        )
                    }
                </SendButton>

            </Container>
        </Background>
    )
}