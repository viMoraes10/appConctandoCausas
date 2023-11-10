  import React, { Component } from 'react';
  import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
  import { Colors } from 'react-native-paper';
  import Icon from 'react-native-vector-icons/FontAwesome';
  import Icon2 from 'react-native-vector-icons/FontAwesome5'; 
  import { theme } from '../core/theme';

  class ongs extends Component{

    constructor(props){
      super(props);
      this.state = {
        message: [
          {
            id: '1', 
            nome: 'Lucas Silva', 
            descricao: 'Oii'  
           },
          {
            id: '2', 
            nome: 'Matheus', 
            descricao: 'Isso sim é ser raiz!!!!!'
          },
          {
            id: '3', 
            nome: 'Jose Augusto', 
            descricao: 'Bora trabalhar Haha'
          },
          {
            id: '4', 
            nome: 'Gustavo Henrique', 
            descricao: 'Isso sim que é TI!'  
          },
          {
            id: '5', 
            nome: 'Guilherme', 
            descricao: 'Boa tarde galera do insta...' 
          }
        ]
       };
    }

    render(){
      return(
        <View style={styles.areaFeed}>
            
            <FlatList
            showsHorizontalScrollIndicator={false}
            keyboardDismissMode={(item) => item.id}
            data={this.state.feed}
            renderItem={ ({item}) => <Lista data={item} /> }
            />
        </View>
      );
    }
  }

  export default ongs;

  const styles = StyleSheet.create({
      areaFeed:{
        width:'100%',
        height: 500,
        flex:1,
        marginTop:0,
      },
      headFeed:{
        width:'100%',
        backgroundColor: '#FFF',
        flexDirection: 'row',
        alignItems: 'center',  
        alignItems: 'flex-start',
        padding:5,
      }, 
      roundedImage: {
        width: 50,            
        height: 50,            
        borderRadius: 50,     
        borderWidth: 0.5,      
        borderColor: 'white',  
      },
      titleOng: {
        fontFamily: 'Roboto',
        fontSize: 12,
        alignItems:'flex-start',
        fontWeight:'bold',
        marginTop:5,
        marginLeft:5,
        height:20,
      },
      descriptionOng: {
        fontFamily: 'Roboto',
        fontSize: 12,
        alignItems:'flex-start',
        marginLeft:5,
      },
      textContainer: {
        marginLeft: 10,  
      },
      imgOngs: {
        flex: 1,
        justifyContent: 'flex-start', 
        alignItems: 'center',
      },
      imgOngsSize:{
        width:500,
        height:400    
      },
      fieldFunctions:{
        backgroundColor: '#FFF',
        flexDirection: 'row',
        alignItems: 'center', 
        //borderWidth:1,
        alignItems: 'flex-start',
        padding:5,
        //borderColor:'red',
        height:50
      },  
      fildDonate:{
        width:40,
        height:40,    
        marginLeft:10, 
      },
      fildMessage:{
        width:40,
        height:40,    
        marginLeft:5, 
      },
      
  })