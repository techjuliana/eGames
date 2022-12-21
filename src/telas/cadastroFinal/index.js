import { useState } from "react";
import { TextInput, Text, View, TouchableOpacity, Switch } from "react-native";
import Slider from "@react-native-community/slider";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";
import FormInicial from "../../components/formInicial";
import { styles } from "./styled";

export default function CadastroFinal() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FormInicial />
      <Text style={styles.textoForm}>E-mail:</Text>
      <TextInput style={styles.input} placeholder="Digite seu e-mail" />

      <Text style={styles.textoForm}>Senha:</Text>
      <TextInput style={styles.input} placeholder="Digite seu e-mail" />

      <TouchableOpacity
        style={styles.botaoEntrar}
        onPress={() => navigation.navigate("breve")}
      >
        <Text style={styles.textoBotao}> Finalizar cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}
