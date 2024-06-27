import React, { useState } from "react";
import {Background, Container, Logo, Input, 
SendButton, SendText, Link, TextLink} from './styles'

export default function SignIn () {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return(
        <Background>
            <Container>
                <Logo
                source={require('../../assets/Logo.png')}
                />

                <Input
                placeholder="Email"
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={(email) => setEmail(email)}
                />

                <Input
                placeholder="Password"
                autoCorrect={false}
                autoCapitalize="none"
                onChangeText={(password) => setPassword(password)}
                />

                <SendButton>
                    <SendText>SignIn</SendText>
                </SendButton>

                <Link>
                    <TextLink>Create an account</TextLink>
                </Link>
            </Container>
        </Background>
    )
}