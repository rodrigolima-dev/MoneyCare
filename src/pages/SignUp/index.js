import React, { useState } from "react";
import {Background, Container, Logo, Input, 
SendButton, SendText, Link, TextLink} from '../SignIn/styles'

export default function SignUp () {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return(
        <Background>
            <Container
            behavior={Platform.OS ? 'padding' : ''}
            enabled
            >
                <Input
                placeholder="Name"
                autoCorrect={false}
                autoCapitalize="none"
                value={email}
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

                <SendButton>
                    <SendText>SignUp</SendText>
                </SendButton>

            </Container>
        </Background>
    )
}