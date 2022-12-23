import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#101114",
    height:'100%',
    flexDirection: "column",
    alignItems: "center",
  },
  gradiente: {
    zIndex: 0,
    position: "absolute",
  },

  imagem: {
    marginTop: 50,
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
    margin: 65,
    width: 300,
  },

  botao: {
    backgroundColor: "#1E1F24",
    alignItems: "center",
    padding: 10,
    marginBottom: 40,
    width: 50,
    borderRadius: 3,
  },
});
