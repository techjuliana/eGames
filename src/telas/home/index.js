import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "./styled";
import { useNavigation } from "@react-navigation/native";
import Mulher from "./../../assets/mulher.svg";
import Gradiente from "./../../assets/gradiente.svg";
export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Gradiente style={styles.gradiente} />
      <Mulher style={styles.imagem} />
      <Text style={styles.titulo}>Tutorial completo ✅</Text>
      <Text style={styles.paragrafo}>
        Entre para a maior comunidade de games do mundo e aproveite todas as
        oportunidades.
      </Text>

      <TouchableOpacity
        style={styles.botaoCadastrar}
        onPress={() => navigation.navigate("cadastro")}
      >
        <Text style={styles.textoBotao}>Cadastro</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botaoLogin}
        onPress={() => navigation.navigate("login")}
      >
        <Text style={styles.textoBotao}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
