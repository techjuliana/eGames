import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#101114",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  gradiente: {
    zIndex: 0,
    position: "absolute",
  },

  imagem: {
    marginTop: 80,
  },

  circle: {
    marginBottom: 20,
  },

  titulo: {
    color: "#FFFFFF",
    fontSize: 29,
    textAlign: "center",
    fontWeight: "bold",
  },

  paragrafo: {
    color: "#B3B0B8",
    fontSize: 15,
    textAlign: "center",
    marginTop: 10,
    margin: 30,
    width: 300,
  },

textoBotao:{
    color: '#fff',
    fontWeight: "bold",
},

  botaoLogin: {
    backgroundColor: "#1E1F24",
    alignItems: "center",
    padding: 10,
    marginBottom: 30,
    width: 50,
    borderRadius: 3,
    width: 300,
  },

  botaoCadastrar: {
    backgroundColor: "#EA3093",
    alignItems: "center",
    padding: 10,
    marginBottom: 10,
    width: 300,
    borderRadius: 3,
  },
});
