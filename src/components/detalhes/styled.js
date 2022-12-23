import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#101114",
    flex: 1,
    justifyContent: "center",
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
    margin: 65,
    width: 300,
  },

  botao: {
    backgroundColor: "#EB2F93",
    alignItems: "center",
    padding: 10,
    margin: 20,
    marginBottom: 40,
    borderRadius: 3,
  },
});
