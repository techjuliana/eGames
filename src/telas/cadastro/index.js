import { TextInput, Text, View, TouchableOpacity } from "react-native";
import FormInicial from "../../components/formInicial";
import { styles } from "./styled";
import { useNavigation } from "@react-navigation/native";
export default function Cadastro() {
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
        <Text style={styles.textoBotao}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}
