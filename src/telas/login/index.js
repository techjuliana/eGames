import { Text, View, TextInput, TouchableOpacity } from "react-native";
import FormInicial from "../../components/formInicial";
import { styles } from "./styled";
import Google from "./../../assets/google.svg";
import Apple from "./../../assets/apple.svg";
import { useNavigation } from '@react-navigation/native';
export default function Login() {
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
    </View>
  );
}
