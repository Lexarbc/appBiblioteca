import { StyleSheet } from 'react-native';

const estiloRebeldes = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Fundo preto
    padding: 10,
  },
  superior: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#FFD700', // Cor de ouro
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#444', // Cinza escuro
    color: '#FFF', // Texto branco
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF', // Texto branco
  },
  details: {
    fontSize: 16,
    color: '#FFF', // Texto branco
  },
});

export default estiloRebeldes;