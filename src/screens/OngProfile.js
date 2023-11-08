import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function OngProfile({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('Home')}
                >
                    <Image
                    source={require('../img/logo.png')}
                    style={styles.logo}/>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image
                    source={require('../img/send.png')}
                    style={styles.send}
                    />
                </TouchableOpacity>
            </View>
            <View>
                <View style={styles.sizeFlatList}>
                    <Image
                        source={require('../img/save-planet.png')}
                        style={styles.profilePic}
                    />
                    <Header>ONG Ajuda Solidária</Header>
                </View>
                <Paragraph>
                    A "ONG Ajuda Solidária" é uma organização sem fins lucrativos, comprometida em promover apoio e assistência a indivíduos em situação de vulnerabilidade. Nossa missão é proporcionar recursos, capacitação e suporte emocional, visando à reintegração social e ao fortalecimento do potencial individual. Por meio de doações, parcerias e o trabalho dedicado de voluntários, buscamos transformar vidas, estabelecer pontes de solidariedade e construir um futuro mais digno para todos aqueles que atendemos. Junte-se a nós e faça parte dessa rede de amor e cuidado!
                </Paragraph>
                <Button>Realizar doação</Button>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      marginTop: 30,
      height: 55,
      backgroundColor: '#FFF',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 5,
      borderBottomWidth: 0.2,
      shadowColor: '#000',
      elevation: 1,
      borderTopWidth: 2,
      borderTopColor: 'rgba(0,0,0,0.1)',
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(0,0,0,0.1)',
      elevation: 1,
      // Para iOS:
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: -2,
      },
      shadowOpacity: 0.1,
      shadowRadius: 5,
    },
    send: {
      width: 23,
      height: 23
    },
    logo: {
      width: 23,
      height: 23
    },
    profilePic: {
        width: 150,
        height: 150
      },
    sizeFlatList: {
        flexDirection: 'row',
    }
  });