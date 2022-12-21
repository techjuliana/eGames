import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Logo from "./../../assets/logoCarregamento.svg";
export default function EmBreve(){
  return(
    <View style={styles.container}>
      <Logo style={styles.logo} />
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
  },
  logo: {
    marginTop: 30,
    marginBottom: 20,
  },
})