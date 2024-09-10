// buscarVersiculo.js
import { Alert } from 'react-native';

export const buscarVersiculo = async (versiculo, versao, setResultado, setErro, setSucesso) => {
  if (!versiculo) {
    Alert.alert('Erro', 'Por favor, insira um versículo.');
    return;
  }

  const url = `https://bible-api.com/${versiculo}?translation=${versao}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.error) {
      setErro(data.error.message);
      setResultado(null);
      setSucesso(null);
    } else {
      setResultado({
        reference: data.reference,
        text: data.text,
        translation: data.translation,
      });
      setErro(null);
      setSucesso('Versículo encontrado com sucesso!');
    }
  } catch (error) {
    setErro('Erro ao buscar o versículo. Por favor, tente novamente mais tarde.');
    setResultado(null);
    setSucesso(null);
  }
};
