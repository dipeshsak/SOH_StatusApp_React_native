import React from 'react';
import { StyleSheet, Text, View,Keyboard,Alert,TouchableWithoutFeedback,TouchableOpacity,ScrollView } from 'react-native';


export default class LanguageSelectionScreen extends React.Component {
  state={
    time:"",
  }
  static navigationOptions = {
    title:"Select Language"
  }

  
  render(){
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.nameBox} onPress={()=>{
            this.props.navigation.navigate("CateSelScreen",{Lan:'Marathi'})
        }}>
          <Text style={styles.lanText}>मराठी</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.nameBox} onPress={()=>{
            this.props.navigation.navigate("CateSelScreen",{Lan:'Hindi'})
        }}>
          <Text style={styles.lanText} >हिंदी</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.nameBox} onPress={()=>{
            this.props.navigation.navigate("CateSelScreen",{Lan:'English'})
        }}>
          <Text style={styles.lanText}>English </Text>
        </TouchableOpacity>
    </View>
   
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffedbc",
    alignItems:'center',
    justifyContent:'center'
  },
  linGradient:{
    flex:1,
  },
  nameBox:{
    width:'80%',
    height:'15%',
    marginBottom:40,
    borderRadius:10,
    borderWidth:3,
    borderColor:'black',
    backgroundColor:'#F84646',
    alignItems:'center',
    justifyContent:'center',
    elevation:15
  },
  lanText:{
    color:'black',
    fontSize:28,
    fontWeight:'bold'
  }
});