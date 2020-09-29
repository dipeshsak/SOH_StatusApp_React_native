import React from 'react';
import { StyleSheet,View,StatusBar } from 'react-native';

 import NavigationRoute from "./Navigation/NavigationRoutes";

export default function App() {
  return (
    <View style={styles.container}>
       <StatusBar barStyle="default" hidden={false} backgroundColor="#E71C23" translucent={false}/>
       <NavigationRoute style={styles.container}/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});