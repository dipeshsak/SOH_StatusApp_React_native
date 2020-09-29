import React from 'react';
import { StyleSheet, Text, View,Keyboard,Alert,TouchableWithoutFeedback,TouchableOpacity,ScrollView } from 'react-native';



export default class CategorySelectionScreen extends React.Component {
  state={
    time:"",
  }
  static navigationOptions = {
    title:"Select Category"
  }

  
  render(){
  return (
    <View style={styles.container}>
        <Text>Heloo from CategorySelectionScreen</Text>
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