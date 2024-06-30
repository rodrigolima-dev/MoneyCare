import styled from "styled-components/native";

export const Container = styled.View`
    margin-bottom: 15px;
    padding: 10px;
    box-sizing: 2px 2px rgba(0,0,0,0.40);
    background-color: rgba(0,0,0,0.02);
`;

export const Type = styled.Text`
    flex-direction: row;
`;

export const IconView = styled.View`
    flex-direction: row;
    background-color: ${props => props.type == 'income' ? '#c62c36' : '#28A745'};
    padding: 4px 8px;
    border-radius: 7px;
`;

export const TypeText = styled.Text`
    color: #fff;
    font-size: 16px;
    font-style: italic;
`;

export const ValueText = styled.Text`
    color: #222;
    font-size: 22px;
    font-weight: bold;
`;