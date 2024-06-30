import React from "react";
import styled from "styled-components/native";

export const Background = styled.View`
flex: 1;
background-color: #F8F9FA;
`

export const Container = styled.KeyboardAvoidingView`
flex: 1;
align-items: center;
justify-content: center;
`

export const Logo = styled.Image`
margin-bottom: 15px;
height: 170px;
width: 170px;
`


export const Input = styled.TextInput.attrs({
    placeholderTextColor: 'rgba(73, 80, 87, 0.5)',
})`
background-color: #fff;
width: 90%;
font-size: 17px;
color: #495057;
border: 1px solid #CED4DA;
margin-bottom: 15px;
padding: 10px;
border-radius: 7px;
`

export const SendButton = styled.TouchableOpacity`
width: 90%;
background-color: #007BFF;
border-radius: 7px;
height: 45px;
justify-content: center;
align-items: center;
margin-top: 10px;
`

export const SendText = styled.Text`
font-size: 17px;
color: #FFF;
opacity: .8;

`

export const Link = styled.TouchableOpacity`
margin-top: 20px;
margin-bottom: 9px;
`

export const TextLink = styled.Text`
color: #495057;
opacity: .5;
`