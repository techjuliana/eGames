import { Text, View, TouchableOpacity } from "react-native";
import { styles } from "./styled";
import { useNavigation } from "@react-navigation/native";
import Pessoas from "./../../assets/pessoas.svg";
import Gradiente from "./../../assets/gradiente.svg";
import Circles from "./../../assets/circles2.svg";
import Arrow from "./../../assets/arrow.svg";
export default function Informativo2() {
  const navigation = useNavigation();
  return (
    <View  style={styles.container}>
      <Gradiente style={styles.gradiente} />
      <Pessoas style={styles.imagem} />
      <Circles style={styles.circle} />
      <Text style={styles.titulo}>Somos uma comunidade</Text>
      <Text style={styles.paragrafo}>
        Encontre outros jogadores com os mesmos interesses que você em uma
        comunidade ativa.
      </Text>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate("terceiro")}
      >
        <Arrow />
      </TouchableOpacity>
    </View>
  );
}
