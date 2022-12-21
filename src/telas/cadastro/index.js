import { useState } from "react";
import { TextInput, Text, View, TouchableOpacity, Switch } from "react-native";
import Slider from "@react-native-community/slider";
import { Picker } from "@react-native-picker/picker";
import { useNavigation } from "@react-navigation/native";
import FormInicial from "../../components/formInicial";
import { styles } from "./styled";

export default function Cadastro() {
  const navigation = useNavigation();
  const [limite, setLimite] = useState(50);
  const [status, setStatus] = useState(false);
  const [generoSelecionado, setGeneroSelecionado] = useState(0);
  const [generoJogo] = useState([
    { key: 0, nome: "Selecione tipos de jogos 🎮" },
    { key: 1, nome: "Ação 🏎️" },
    { key: 2, nome: "Aventura 🎢" },
    { key: 3, nome: "Suspense 💀" },
  ]);

  let generoItem = generoJogo.map((value, key) => {
    return <Picker.Item key={key} value={key} label={value.nome} />;
  });
  return (
    <View style={styles.container}>
      <FormInicial />

      <View style={styles.containerGenerosJogos}>
        <Picker
          style={styles.selecioneJogo}
          selectedValue={generoSelecionado}
          onValueChange={(itemValue) => setGeneroSelecionado(itemValue)}
        >
          {generoItem}
        </Picker>
      </View>

      <View style={styles.containerEstudante}>
        <Text style={styles.textoPerguntas}>
          É estudante? {status ? "Sim" : "Não"}
        </Text>
        <Switch
          value={status}
          onValueChange={(valorSelecionado) => setStatus(valorSelecionado)}
          trackColor={{ false: "red", true: "green" }}
        />
      </View>

      <View style={styles.containerLimiteCredito}>
        <Slider
          minimumValue={0}
          maximumValue={1000}
          value={limite}
          onValueChange={(valorSelecionado) => setLimite(valorSelecionado)}
          minimumTrackTintColor="#EB2F93"
          maximumTrackTintColor="#712DE0"
          thumbTintColor="green"
        />

        <Text style={styles.textoPerguntas}>
          Limite crédito desejado $ {limite.toFixed(0)}{" "}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.botaoEntrar}
        onPress={() => navigation.navigate("cadastroFinalizacao")}
      >
        <Text style={styles.textoBotao}>Continuar cadastro</Text>
      </TouchableOpacity>
    </View>
  );
}
