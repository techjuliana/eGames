import {Text, TouchableOpacity, View } from "react-native";
import {styles} from './styled';
import Homem from "./../../assets/homem.svg";
import Gradiente from "./../../assets/gradiente.svg";
import Circles from "./../../assets/circles1.svg";
import Arrow from "./../../assets/arrow.svg";
import { useNavigation } from '@react-navigation/native';

export default function Informativo1() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Gradiente style={styles.gradiente}/>
      <Homem style={styles.imagem} />
      <Circles style={styles.circle} />
      <Text style={styles.titulo}>Tudo em um só lugar</Text>
      <Text style={styles.paragrafo}>
        Os melhores games, lançamentos, novidades e tudo o que você precisa você
        vai ver aqui.
      </Text>
      <TouchableOpacity style={styles.botao} onPress={ () => navigation.navigate('segundo')}>
      <Arrow />
      </TouchableOpacity>
    </View>
  );
}

