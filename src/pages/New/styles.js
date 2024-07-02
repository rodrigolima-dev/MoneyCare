import styled from "styled-components/native"

export const Background = styled.View`
    flex: 1;
    background-color: #F8F9FA;
`

export const Input = styled.TextInput.attrs({
    placeholderTextColor: 'rgba(73, 80, 87, 0.5)'
})`
    height: 50px;
    width: 90%;
    border: 1px solid #CED4DA;
    margin-top: 100px;
    font-size: 17px;
    padding: 10px;
    background-color: white;
`

export const SubmitButton = styled.TouchableOpacity`
    height: 50px;
    width: 90%;
    margin-top: 20px;
    align-items: center;
    justify-content: center;
    background-color: #007BFF;

`

export const SubmitText = styled.Text`
    font-size: 18px;
    color: #fff;
`