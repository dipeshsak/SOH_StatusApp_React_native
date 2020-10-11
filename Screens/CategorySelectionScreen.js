import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity,FlatList } from 'react-native';
let colors=["#ff9999","#ffcc99","#66ffff","#99ff99","#9999ff","#ff99ff"]
export default class CategorySelectionScreen extends React.Component {
   
  state={
    categoryNameAll:[
      [{id:'सर्व'},{id:'नवीन'},{id:'नवीनतम'},{id:'प्रेम'},{id:'स्वातंत्र्य'},{id:'मित्र'},{id:'दु: खी'},{id:'सर्व 1'},{id:'नवीन 1'},{id:'नवीनतम1'},{id:'प्रेम'},{id:'स्वातंत्र्य'},{id:'मित्र'}],
      [{id:'H All'},{id:'H New'},{id:'H Latest'},{id:'H Love'},{id:'H Freedom'},{id:'H Friends1'},{id:'H Sad1'},{id:'All1'},{id:'New1'},{id:'Latest1'},{id:'Love1'},{id:'Freedom1'},{id:'Friends1'}],
      [{id:'All'},{id:'New123'},{id:'Latest'},{id:'Love'},{id:'Freedom'},{id:'Friends1'},{id:'Sad1'},{id:'All1'},{id:'New1'},{id:'Latest1'},{id:'Love1'},{id:'Freedom1'},{id:'Friends1'}]
    ],
    catergoryNameSelected:"",
  
  
  }
  static navigationOptions = {
    title:"Select Category"
  }

  componentDidMount() {
    const { navigation } = this.props;
    let Lan = navigation.getParam("Lan",'English');
    this.handleLanguageTrans(Lan);
  }

  handleLanguageTrans =(Lan)=>{
    if(Lan== "Marathi"){
      this.setState({
        catergoryNameSelected : this.state.categoryNameAll[0]
      })
    }else if(Lan === "Hindi"){
      this.setState({
        catergoryNameSelected : this.state.categoryNameAll[1]
      })
    }else{
      this.setState({
        catergoryNameSelected : this.state.categoryNameAll[2]
      })
    }
  }

  renderItem = ({ item,index }) => (
    <TouchableOpacity style={[styles.nameBox,{backgroundColor:colors[index % colors.length]}]} onPress={()=>{
      this.props.navigation.navigate("CardAnimationScreen")
  }}>
    <Text style={styles.catText}>{item.id}</Text>
  </TouchableOpacity>
  )

  render(){
  return (
    <View style={styles.container}>
      <FlatList 
         data={this.state.catergoryNameSelected}
         renderItem={this.renderItem}
         numColumns={2}
         keyExtractor={item => item.id}
         style={styles.FlatListStyle}
       />
    </View>
   
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",  
  },
  FlatListStyle:{
    flex:1,
    backgroundColor: "#ffedbc",
  },
  nameBox:{
    flex:1,
    width:'100%',
    height:150,
    margin:8,
    borderRadius:15,
    borderWidth:2.5,
    borderColor:'red',
    elevation:15,
    alignItems:'center',
    justifyContent:'center'
  },
  catText:{
    color:'black',
    fontSize:28,
    fontWeight:'bold'
  }
});