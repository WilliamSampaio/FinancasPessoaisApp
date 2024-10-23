import styled from "styled-components/native";

export const Backgroud = styled.View`
    flex: 1;
    background-color: #F0F4FF;
`;

export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const Logo = styled.Image`
    margin-bottom: 25px;
`;

export const AreaInput = styled.View`
    flex-direction: row;
`;

export const Input = styled.TextInput`
    width: 90%;
    font-size: 17px;
    padding: 10px;
    border-width: 1px;
    border-radius: 15px;
    margin-bottom: 10px;
    text-align: center;
    background-color: #FFF;
`;

export const SubmitButton = styled.TouchableOpacity`
    width: 90%;
    height: 50px;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    padding: 10px;
    border-radius: 15px;
    margin-bottom: 10px;
    background-color: #3B3DBF;
`;

export const SubmitText = styled.Text`
    color: #FFF;
    text-transform: uppercase;
`;

export const LinkButton = styled.TouchableOpacity`
    width: 90%;
    height: 50px;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    padding: 10px;
    margin-bottom: 10px;
`;

export const LinkText = styled.Text`
    color: #3B3DBF;
    text-transform: uppercase;
    font-weight: 700;
`;