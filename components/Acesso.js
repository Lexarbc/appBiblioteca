import {
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import React, { useState, useEffect } from 'react';

import Firebase from './FireBase';

export default function Acesso({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function dados(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  function logar() {
    Firebase.auth()
      .signInWithEmailAndPassword(email, senha)
      .then(() => {
        if (user) {
          alert('Usuario não existe');
          return;
        }
        navigation.navigate('Home', { email });
      })
      .catch((error) => {
        alert(error);
        navigation.navigate('Acesso');
      });
  }

  useEffect(() => {
    Firebase.auth().onAuthStateChanged(function (user) {
      const uid = user.uid;
      const email = user.email;
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.titulo}>BiblioTech</Text>
      <Image style={styles.foto} source={require('../assets/livros.png')} />

      <TextInput
        style={styles.input}
        onChangeText={(email) => setEmail(email)}
        placeholder="Digite o E-mail"
        value={email}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite a senha"
        onChangeText={(senha) => setSenha(senha)}
        value={senha}
        secureTextEntry={true}
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={() => {
          logar();
        }}>
        <Text style={styles.botaoTxt}>Acessar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('Cadastro')}>
        <Text style={styles.botaoTxt}>Registrar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#458B74',
    padding: 10,
  },
  titulo: {
    color: '#ffffff',
    margin: 10,
    fontSize: 38,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  foto: {
    alignSelf: 'center',
    width: 250,
    height: 250,
    borderRadius: 190,
    margin: 10,
  },
  input: {
    textAlign: 'center',
    borderStyle: 'dotted',
    borderColor: '#483D8B',
    borderWidth: 1,
    padding: 8,
    margin: 8,
    marginHorizontal: 40,
  },
  botao: {
    backgroundColor: '#4B0082',
    width: 150,
    height: 40,
    borderRadius: 10,
    alignSelf: 'center',
    margin: 10,
    padding: 5
  },
  botaoTxt: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center'
  },
});
