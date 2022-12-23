import { TextInput, Text, View, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import FormInicial from "../../components/formInicial";
import { styles } from "./styled";

export default function CadastroFinal() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <FormInicial />
      <Text style={styles.textoForm}>Cadastre seu melhor e-mail:</Text>
      <TextInput style={styles.input} placeholder="Digite seu melhor e-mail" />

      <Text style={styles.textoForm}>Crie uma senha:</Text>
      <TextInput style={styles.input} placeholder="Digite sua senha" />

      <TouchableOpacity
        style={styles.botaoEntrar}
        onPress={() => navigation.navigate("breve")}
      >
        <Text style={styles.textoBotao}> Finalizar cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}
