import { Text, View, TextInput, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import { useState } from "react";
import FormInicial from "../../components/formInicial";
import { styles } from "./styled";
import Google from "./../../assets/google.svg";
import Apple from "./../../assets/apple.svg";
import { useNavigation } from '@react-navigation/native';
export default function Login() {
  const [senha, setSenha] = useState('')
  const navigation = useNavigation();

  return (
    <View  style={styles.container}>
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{flex:1}}>
      <FormInicial />
      <Text style={styles.textoForm}>E-mail cadastrado:</Text>
      <TextInput style={styles.input} placeholder="Digite seu e-mail" />

      <Text style={styles.textoForm}>Senha:</Text>
      <TextInput onChangeText={ valor => setSenha(valor)} secureTextEntry={true} style={styles.input} placeholder="Digite sua senha" />

      <TouchableOpacity
        style={styles.botaoEntrar}
        onPress={ senha.length > 5 ?  () => navigation.navigate("breve") : () => {}}
      >
        <Text style={styles.textoBotao}>Entrar</Text>
      </TouchableOpacity>

      <View style={styles.redesSociais}>
        <TouchableOpacity
          style={styles.botaoRede}
          onPress={() => navigation.navigate("breve")}
        >
          <Text style={styles.textoBotao}>
            <Google style={styles.icon}/>
            Google
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botaoRede}
          onPress={() => navigation.navigate("breve")}
        >
          <Text style={styles.textoBotao}>
            <Apple style={styles.icon}
            />
            Apple
          </Text>
          </TouchableOpacity>
      </View>
      </KeyboardAvoidingView>
    </View>
   
  );
}
