import { Text, View } from "react-native";
import FormInicial from "../../components/formInicial";
import { styles } from "./styled";

export default function Login() {
  return (
    <View style={styles.container}>
      <FormInicial />
      <Text>form login componente</Text>
    </View>
  );
}
