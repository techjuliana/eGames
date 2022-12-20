import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#101114",
    height:'100%',
  },
  textoForm: {
    marginTop: 20,
    marginBottom: 3,
    color: "#fff",
    marginLeft: 15,
    fontWeight: "bold",
  },

  input: {
    backgroundColor: "#B3B0B8",
    marginLeft: 14,
    marginRight: 14,
    padding: 5,
    borderRadius: 3,
  },

  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
  },

  botaoEntrar: {
    backgroundColor: "#712DE0",
    alignItems: "center",
    padding: 10,
    marginTop: 20,
    marginBottom: 20,
    marginLeft: 14,
    marginRight: 14,
    borderRadius: 3,
  },

  botaoRede: {
    backgroundColor: "#1E1F24",
    alignItems: "center",
    padding: 10,
    margin:4,
    borderRadius: 3,
    width:150,
  },

  redesSociais: {
    display: "flex",
    flexDirection: "row",
    justifyContent:"space-around"
  },
  icon: {
    margin:5,
  },

});
