
import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList
} from 'react-native';

import Lista from '../Lista/ongs';

class Home extends Component {
    
  constructor(props){
    super(props);
    this.state = {
      feed: [
        {
          id: '1', 
          nome: 'Lucas Silva', 
          descricao: 'Mais um dia de muitos bugs :)', 
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto1.png',  
          likeada: false, 
          likers: 0
         },
        {
          id: '2', 
          nome: 'Matheus', 
          descricao: 'Isso sim é ser raiz!!!!!', 
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto2.png', 
          likeada: false, 
          likers: 0
        },
        {
          id: '3', 
          nome: 'Jose Augusto', 
          descricao: 'Bora trabalhar Haha', 
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto3.png',  
          likeada: false, 
          likers: 3
        },
        {
          id: '4', 
          nome: 'Gustavo Henrique', 
          descricao: 'Isso sim que é TI!', 
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto4.png', 
          likeada: false, 
          likers: 1
        },
        {
          id: '5', 
          nome: 'Guilherme', 
          descricao: 'Boa tarde galera do insta...', 
          imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png', 
          imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto5.png',
          likeada: false, 
          likers: 32
        }
      ]
     };
  }

  render() {
    
    const { navigation } = this.props;
    
    return (
      <View style={styles.container}>
      
        <View style={styles.header}>
          <TouchableOpacity 
            onPress={() => navigation.navigate('StartScreen')}
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

        <View style={styles.sizeFlatList}>
          <FlatList
          showsHorizontalScrollIndicator={false}
          keyboardDismissMode={(item) => item.id}
          data={this.state.feed}
          renderItem={ ({item}) => <Lista data={item} /> }
          />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    marginTop:30,
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
  send:{
    width: 23,
    height: 23
  },
  logo:{
    width: 23,
    height: 23
  },
  sizeFlatList:{
    
  }

});

export default Home;