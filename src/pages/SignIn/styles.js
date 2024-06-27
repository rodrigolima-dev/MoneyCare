import React from "react";
import styled from "styled-components/native";

export const Background = styled.View`
flex: 1;
background-color: #131313;
`

export const Container = styled.KeyboardAvoidingView`
flex: 1;
align-items: center;
justify-content: center;
`

export const Logo = styled.Image`
margin-bottom: 15px;
`


export const Input = styled.TextInput.attrs({
    placeholderTextColor: 'rgba(255,255,255,0.20)',
})`
background-color: rgba(0,0,0,0.20);
width: 90%;
font-size: 17px;
color: #fff;
margin-bottom: 15px;
padding: 10px;
border-radius: 7px;

`

export const SendButton = styled.TouchableOpacity`
width: 90%;
background-color: #12B653;
border-radius: 7px;
height: 45px;
justify-content: center;
align-items: center;
margin-top: 10px;
`

export const SendText = styled.Text`
font-size: 17px;
color: #131313;
opacity: .8;

`

export const Link = styled.TouchableOpacity`
margin-top: 20px;
margin-bottom: 9px;
`

export const TextLink = styled.Text`
color: #fff;
opacity: .5;
`