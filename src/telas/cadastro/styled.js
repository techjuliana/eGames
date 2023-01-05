import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#101114", 
    height:'100%',
  },
  containerEstudante: {
    display: "flex",
    flexDirection: "row",
    justifyContent:"space-around",
    margin:15,
  },

  containerGenerosJogos: {
    display: "flex",
    flexDirection: "column",
    justifyContent:"center",
    margin:15,
  },

  containerLimiteCredito: {
    display: "flex",
    flexDirection: "column",
    justifyContent:"center",
    margin:20,
  },
  
  textoForm: {
    marginTop:20,
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

  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
  },

  textoPerguntas: {
    textAlign: 'center', 
    fontSize: 16, 
    color: "#fff",
    margin:10,
  },

  selecioneJogo: {
    textAlign: 'center', 
    fontSize: 16, 
    color: "#fff",
    margin:10,
    backgroundColor:'#B3B0B8',
  },
});
