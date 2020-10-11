import React from 'react';
import { StyleSheet, Text, View,Keyboard,Alert,Share,TouchableOpacity,FlatList } from 'react-native';

let colors=["#ff9999","#ffcc99","#66ffff","#99ff99","#9999ff","#ff99ff"]

export default class CardAnimationScreen extends React.Component {
  state={
    data:[
      {
        id: '1',
        quote: 'Be yourself; everyone else is already taken',
        writer:"Dipesh Sakharkar"
      },
      {
        id: '2',
        quote: 'Be yourself; everyone else is already taken',
        writer:"Chaitali Patil"
      },
      {
        id: '3',
        quote: 'Be yourself; everyone else is already taken , Be yourself; everyone else is already taken',
        writer:"Dipesh Sakharkar"
      },
      {
        id: '4',
        quote: 'Be yourself everyone else is already take akcnaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa is already taken Be yourself everyone else is already uuuuuuiiiy       222',
        writer:"Dipesh Sakharkar"
      },
      {
        id: '5',
        quote: 'Be yourself; everyone else is already taken',
        writer:"Chaitali Sakharkar"
      },
      {
        id: '6',
        quote: 'Be yourself; everyone else is already taken',
        writer:"Dipesh Sakharkar"
      },
    ],
  }
  static navigationOptions = {
    title:"Select Language"
  }


    ShareContent = async (item) => {
      try {
        const result = await Share.share({
          message:
            item ,
        });
        // if (result.action === Share.sharedAction) {
        //   if (result.activityType) {
        //     // shared with activity type of result.activityType
        //   } else {
        //     // shared
        //   }
        // } else if (result.action === Share.dismissedAction) {
        //   // dismissed
        // }
      } 
      catch (error) {
        alert(error.message);
      }
    }
  // )

  renderItem = ({ item,index }) => (
    <View style={[styles.fullCardView,{backgroundColor:colors[index % colors.length]}]}
  >
    <View style={[styles.cardTopBox]}>
    <Text style={styles.cardText}>{'"'+item.quote+'"'}</Text>
    </View>
    <View style={[styles.authorTextView]}>
    <Text style={styles.authorText}>{'-'+item.writer}</Text>
    </View>
    <View style={[styles.cardBottomBox]}>
         <TouchableOpacity>
           <Text style={styles.likeShareText}>Like </Text>
          </TouchableOpacity>
         <TouchableOpacity onPress={()=>{this.ShareContent(item.quote)}}>
           <Text style={styles.likeShareText}>Share </Text>
           </TouchableOpacity>
    </View>
    
  </View>
  )
  
  render(){
  return (
    <View style={styles.container}>
        <FlatList 
        data={this.state.data}
        renderItem={this.renderItem}
        keyExtractor={item => item.id}
        style={styles.flatListStyle}/>
    </View>
   
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    // alignItems:'center',
    // justifyContent:'center'
  },
  flatListStyle:{
    flex:1,
     backgroundColor:'#fff',
  },
  fullCardView:{
    flex:1,
     height:300,
    margin:10,
    borderColor:'red',
    borderWidth:3,
    borderBottomRightRadius:10,
    borderBottomLeftRadius:10,
    borderTopRightRadius:10,
    borderTopLeftRadius:10,
    // backgroundColor:`${"grey"}`,
    // elevation:15,
    alignItems:'center',
    justifyContent:'center'
  },
  cardTopBox:{
    flex:1,
    width:'100%',
    alignItems:'center',
    justifyContent:'space-evenly',
    // height:250,
    
  },
  cardText:{
    fontSize:24,
    color:'black',
    fontWeight:'bold',
    left:10,
    right:10
  },
  authorTextView:{
    height:30,
    // padding:10,
    width:'100%',
    alignItems:'flex-end'
  },
  authorText:{
    fontSize:20,
    right:20,
    paddingBottom:20
  },
  cardBottomBox:{
    flex:1/5,
    width:'100%',
    height:50,
    borderBottomRightRadius:8,
    borderBottomLeftRadius:8,
    alignItems:'center',
    flexDirection:'row',
    justifyContent:'space-evenly',
    backgroundColor:'red'
  },
  likeShareText:{
    fontSize:22,
    fontWeight:'bold',
    color:'white'
  }
});