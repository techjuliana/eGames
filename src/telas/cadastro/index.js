import { useState } from "react";
import { TextInput, Text, View, TouchableOpacity, Switch} from "react-native";
import Slider from '@react-native-community/slider';
import {Picker} from '@react-native-picker/picker';
import { useNavigation } from "@react-navigation/native";
import FormInicial from "../../components/formInicial";
import { styles } from "./styled";

export default function Cadastro() {
  const navigation = useNavigation();
  const [limite, setLimite] = useState(50);
  const [status, setStatus] = useState(false);
  const [carroSelecionado, setCarroSelecionado] = useState(0);
  const [carros, setCarros] = useState([
    {key: 0, nome: 'Selecione tipos de jogos '},
    {key: 1, nome: 'Ação'},
    {key: 2, nome: 'Aventura'},
    {key: 3, nome: 'Suspense'}, 
  ]) 

  let carrosItem = carros.map( (v, k) => {
    return <Picker.Item key={k} value={k} label={v.nome} />
  })
  return (
    <View style={styles.container}>
     <FormInicial />

  <View style={styles.containerEstudante}>
   <Text style={styles.textoPerguntas}>
     É estudante? {status ? 'Sim' : 'Não'} 
   </Text>
   <Switch
   value={status}
   onValueChange={ (valorSelecionado) => setStatus(valorSelecionado) }
   trackColor={{ false:'red', true: '#712DE0' }}
   thumbColor={status ? '#f4f4f4' : '#f4f4f4'}
   />
</View>

<View style={styles.containerGenerosJogos}>
     <Picker style={styles.selecioneJogo}
      selectedValue={carroSelecionado}
      onValueChange={ (itemValue, itemIndex) => setCarroSelecionado(itemValue) }
    >
      {carrosItem}
    </Picker>
</View>

<View style={styles.containerLimiteCredito}>
    <Slider
      minimumValue={0}
      maximumValue={1000}
      value={limite}
      onValueChange={(valorSelecionado) => setLimite(valorSelecionado)}
      minimumTrackTintColor="#EB2F93"
      maximumTrackTintColor="#712DE0"
      thumbTintColor="#712DE0"
    />
    
<Text style={styles.textoPerguntas}>Limite crédito desejado $ {limite.toFixed(0)} </Text>
</View>

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
