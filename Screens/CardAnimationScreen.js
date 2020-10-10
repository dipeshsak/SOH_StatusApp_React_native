import React from 'react';
import { StyleSheet, Text, View,Keyboard,Alert,TouchableWithoutFeedback,TouchableOpacity,FlatList } from 'react-native';



export default class CardAnimationScreen extends React.Component {
  state={
    data:[
      {
        id: '1',
        quote: 'Be yourself; everyone else is already taken',
      },
      {
        id: '2',
        quote: 'Be yourself; everyone else is already taken',
      },
      {
        id: '3',
        quote: 'Be yourself; everyone else is already taken',
      },
      {
        id: '4',
        quote: 'Be yourself; everyone else is already taken',
      },
      {
        id: '5',
        quote: 'Be yourself; everyone else is already taken',
      },
      {
        id: '6',
        quote: 'Be yourself; everyone else is already taken',
      },
    ],
  }
  static navigationOptions = {
    title:"Select Language"
  }
  renderItem = ({ item }) => (
    <View style={styles.cardView}
  >
    <Text style={styles.cardText}>{item.quote}</Text>
  </View>
  )
  
  render(){
  return (
    <View style={styles.container}>
        <FlatList 
        data={this.state.data}
        renderItem={this.renderItem}
        keyExtractor={item => item.id}
        style={styles.FlatListStyle}/>
    </View>
   
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems:'center',
    // justifyContent:'center'
  },
  FlatListStyle:{
    flex:1,
    backgroundColor:'#fff',
  },
  cardView:{
    flex:1,
    height:300,
    margin:10,
    borderColor:'black',
    borderWidth:5,
    borderRadius:10,
    backgroundColor:`${"teal"}`,
    elevation:15,
  },
  cardText:{
    color:'white'
  }
});