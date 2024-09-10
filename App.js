import React, { useState } from 'react';
import { View, Text, TextInput, Button, Picker, ScrollView } from 'react-native';
import styles from './styles';
import {buscarVersiculo} from './src/route/buscarversiculo';

const App = () => {
  const [versiculo, setVersiculo] = useState('');
  const [versao, setVersao] = useState('almeida');
  const [resultado, setResultado] = useState(null);
  const [erro, setErro] = useState(null);
  const [sucesso, setSucesso] = useState(null);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Consulta de Versículo</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Versículo:</Text>
        <TextInput
          style={styles.input}
          placeholder="Exemplo: john 3:16"
          value={versiculo}
          onChangeText={setVersiculo}
        />
        <Picker
          selectedValue={versao}
          style={styles.select}
          onValueChange={(itemValue) => setVersao(itemValue)}
        >
          <Picker.Item label="Almeida" value="almeida" />
          <Picker.Item label="WEB" value="web" />
        </Picker>
        <Button
          title="Buscar"
          color="#2980b9"
          onPress={() => buscarVersiculo(versiculo, versao, setResultado, setErro, setSucesso)}
        />
      </View>
      {resultado && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultTitle}>Versículo: {resultado.reference}</Text>
          <Text style={styles.resultText}><strong>Texto:</strong> {resultado.text}</Text>
          <Text style={styles.resultText}><strong>Versão:</strong> {resultado.translation}</Text>
        </View>
      )}
      {erro && <Text style={styles.error}>{erro}</Text>}
      {sucesso && <Text style={styles.success}>{sucesso}</Text>}
    </ScrollView>
  );
};

export default App;
