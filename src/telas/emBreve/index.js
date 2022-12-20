import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function EmBreve(){
  return(
    <View style={styles.container}>
      <Text  style={styles.texto}>Em Breve</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#101114",
    justifyContent: 'center',
    alignItems: 'center'
  },
 texto:{
   color: "#fff",
    fontSize:40,
  }
})