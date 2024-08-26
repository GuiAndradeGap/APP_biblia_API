import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  headerContainer: {
    alignItems: 'center',         // Centraliza verticalmente
    justifyContent: 'flex-start', // Alinha à esquerda
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#050521',  // Cor de fundo azul
  },
  logo: {
    width: 125,
    height: 75,
    resizeMode: 'contain',
  },
  iconButton: {
   marginLeft:200,
  },
  container: {
    backgroundColor: '#050521',  // Cor de fundo azul
    flex: 1,
    padding: 10,
  },
  containerJogos: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  images: {
    width: 100,
    height: 150,
    borderRadius: 8,
    marginRight: 10,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  imgLoja: {
    fontSize: 14,
    color: '#AAAAAA',
  },
  imgProduto: {
    fontSize: 14,
    color: '#CCCCCC',
  },
});

export default styles;