import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'

export default function StartScreen({ navigation }) {
    return (
        <Background>
            <Logo />
            <Header>Conectando Causas</Header>
            <Paragraph>
                Doar é amar em ação.
            </Paragraph>
            <Button
                mode="contained"
                onPress={() => navigation.navigate('LoginScreen')}
            >
                Login
            </Button>
            <Button
                mode="outlined"
                onPress={() => navigation.navigate('RegisterScreen')}
            >
                cadastra-se
            </Button>
        </Background>
    )
}
