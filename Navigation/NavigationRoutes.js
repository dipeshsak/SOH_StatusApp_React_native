// Import react navigation ,react navigation stack
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

//import  Screens
 import LanSelScreen from '../Screens/LanguageSelectionScreen'
 import CateSelScreen  from '../Screens/CategorySelectionScreen'
 import CardAnimationScreen   from '../Screens/CardAnimationScreen'
import EachCardScreen from '../Screens/EachCardScreen'


const MainNavigator = createStackNavigator(
  {
     LanSelScreen:{screen:LanSelScreen},
     CateSelScreen:{screen:CateSelScreen},
     CardAnimationScreen:{screen:CardAnimationScreen},
     EachCardScreen:{screen:EachCardScreen}
  },{
    defaultNavigationOptions:{
      headerTintColor:"#fff",
      headerStyle:{
        backgroundColor:"#F84646"
      },
      headerTitleStyle:{
        color:"#fff",        
      }
    }
  }
)
const NavigationRoute = createAppContainer(MainNavigator)
export default NavigationRoute