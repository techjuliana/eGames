import { Text, TouchableOpacity, View, Modal } from "react-native";
import { styles } from "./styled";
import Ilustracao from "./../../assets/ilustracao.svg";
import Gradiente from "./../../assets/gradiente.svg";
import Fechar from "./../../assets/down.svg";
import { useState } from "react";

export default function Detalhes() {
  const [modalVisible, setModalVisible] = useState(false);

  function abrirModal() {
    setModalVisible(true);
  }

  return (
    <View>
      <TouchableOpacity style={styles.botao} onPress={abrirModal}>
        <Text style={styles.titulo}>+ Detalhes</Text>
      </TouchableOpacity>
      <Modal transparent={true} animationType="slide" visible={modalVisible}>
        <View style={styles.container}>
          <Gradiente style={styles.gradiente} />
          <Ilustracao style={styles.imagem} />
          <Text style={styles.titulo}>Tudo em um só lugar</Text>
          <Text style={styles.paragrafo}>
            Os melhores games, lançamentos, novidades e tudo o que você precisa
            você vai ver aqui.
          </Text>
          <TouchableOpacity
            style={styles.botao}
            onPress={() => setModalVisible(false)}
          >
            <Fechar />
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}
