import React from 'react';
import { StyleSheet, Text, View,Keyboard,Alert,TouchableWithoutFeedback,TouchableOpacity,ScrollView } from 'react-native';



export default class CardAnimationScreen extends React.Component {
  state={
    time:"",
  }
  static navigationOptions = {
    title:"Select Language"
  }

  
  render(){
  return (
    <View style={styles.container}>
        <Text>Hello from Card Animation Screen</Text>
    </View>
   
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    
  }
});