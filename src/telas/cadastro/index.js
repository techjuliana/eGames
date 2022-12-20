import { Text, View } from "react-native";
import FormInicial from "../../components/formInicial";
import { styles } from "./styled";

export default function Cadastro() {
  return (
    <View style={styles.container}>
      <FormInicial />
      <Text>form cadastro componente</Text>
    </View>
  );
}
