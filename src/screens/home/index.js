import React from 'react';
import { View, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import DATA from '../../Data/Data'; 
import DATACLI from '../../Data/DataCliente';
import styles from './styles';

export default function Home() {
  const navigation = useNavigation();

  return (
    <>
      <View style={styles.headerContainer}>
        <Image
          source={require('../../assets/logo.png')}
          style={styles.logo}
          alt="Sua Empresa"
        />
        <TouchableOpacity
          style={styles.iconButton}  // Adicionando o estilo para alinhar à direita
          onPress={() => {
            const cliente = DATACLI[0];
            if (cliente && cliente.id) {
              navigation.navigate('PerfilCliente', { id: cliente.id });
            } else {
              alert('Cliente não encontrado.');
            }
          }}
        >
          <Icon name="cog" size={30} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      <ScrollView>
        <View style={styles.container}>
          {DATA.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.containerJogos}
              onPress={() => alert(`${item.nomeProduto} selected`)}
            >
              <Image
                style={styles.images}
                source={{ uri: item.imgProduto }}
              />
              <View>
                <Text style={styles.titulo}>{item.nomeProduto}</Text>
                <Text style={styles.imgProduto}>{item.imgProduto}</Text>
                <Text style={styles.imgLoja}>{item.imgLoja}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </>
  );
}