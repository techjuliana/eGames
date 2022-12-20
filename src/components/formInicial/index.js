
import { Text, View } from 'react-native';
import {styles} from './styled';
import Logo from "./../../assets/logo.svg";
export default function FormInicial() {
  return (
    <View style={styles.container}>
      <Logo style={styles.logo} />
      <Text style={styles.paragrafo}>Entre para a maior comunidade de games do mundo.</Text>
    </View>
  );
}
