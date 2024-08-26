import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

  //começo do perfil
  background: {
    backgroundColor: '#050521'
  },

  containerPerfil: {
    alignItems:'center'
  },

  foto: {
    height: 175,
    width: 175,
    borderWidth: 4,
    borderColor: '#FF5800',
    borderRadius: 100,
  },

  
  titleText: {
    fontSize: 20,
    margin:20,
    color:'#fff',
  },

  nameText: {
    fontSize: 30,
    fontWeight: 'bold',
    margin:5,
    color:'#FF5800',
  },

  bioText: {
    color:'#fff',
  },
  //fim do perfil

  //começo das informações pessoais
  containerInfo: {
    alignItems:'center',
    margin:20,
  },

  infoPessoal: {
    display: 'flex',
    flexDirection:'row',
    gap:200,
    marginBottom:30,
  },

  textInfoCont: {
    color:'#fff',
  },

  containerCard: {
    marginBottom: 10,  // Espaço entre os grupos de cartões
  },
  cardInfo: {
    width: 300,
    height: 50,
    backgroundColor: '#262938',
    alignItems: 'center',         // Centraliza verticalmente
    justifyContent: 'flex-start', // Alinha à esquerda
    display: 'flex',
    flexDirection: 'row',
    paddingLeft: 15,              // Espaço da borda esquerda
    margin: 1,
  },
  textInfo: {
    flex: 1,                      // Ocupa espaço disponível, alinhado à esquerda
    color: 'white',               // Cor do texto
  },
  firstCard: {
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  lastCard: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  
   // Outros estilos
   textInput: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    color: 'white',
    marginRight:4,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  

  });

  export default styles;