import React from 'react';
import styles from './styles'
import { useNavigation, useRoute } from '@react-navigation/native'
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';

export default function Cadastro2(){
  const navigation = useNavigation();
    return(
     
<View style={{ flex: 1, backgroundColor: '#050521' }}>
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/logo.png')}
          style={styles.logo}
          alt="Sua Empresa"
        />
      </View>

      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>CEP</Text>
          <TextInput
            style={styles.input}
            placeholder="12345-678"
            keyboardType="numeric"
            autoCapitalize="none"
            required
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Logradouro</Text>
          <TextInput
            style={styles.input}
            placeholder="Logradouro"
            keyboardType="default"
            autoCapitalize="none"
            required
          />
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.label}>Bairro</Text>
          <TextInput
            style={styles.input}
            placeholder="Bairro"
            keyboardType="default"
            autoCapitalize="none"
            required
          />
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.passwordContainer}>
            <Text style={styles.label}>Cidade</Text>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Cidade"
            autoComplete="name"
            required
          />
          
        </View>

        <TouchableOpacity style={styles.button}  onPress={() => navigation.navigate('Cadastro3')}>
          <Text style={styles.buttonText}>Próximo</Text>
        </TouchableOpacity>
      </View>
    </View>
   
      );
}