import { Text, View, TouchableOpacity} from "react-native";
import { styles } from "./styled";
import { useNavigation } from "@react-navigation/native";
import Mulher from "./../../assets/mulher.svg";
import Gradiente from "./../../assets/gradiente.svg";
import Circles from "./../../assets/circles3.svg";
export default function Informativo3() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Gradiente style={styles.gradiente} />
      <Mulher style={styles.imagem} />
      <Circles style={styles.circle} />
      <Text style={styles.titulo}>Divirta-se</Text>
      <Text style={styles.paragrafo}>
        Entre para a maior comunidade de games do mundo.
      </Text>

      <TouchableOpacity
        style={styles.botaoCadastrar}
        onPress={() => navigation.navigate("cadastro")}
      >
      <Text style={styles.textoBotao}>
      Cadastro
      </Text>
      </TouchableOpacity>
      
      <TouchableOpacity
        style={styles.botaoLogin}
        onPress={() => navigation.navigate("login")}
      >
      <Text style={styles.textoBotao}>
      Login
      </Text>
      </TouchableOpacity>
    </View>
  );
}
