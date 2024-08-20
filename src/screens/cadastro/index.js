import React from 'react';
import styles from './styles';
import { useNavigation, useRoute } from '@react-navigation/native'
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';

export default function Cadastro(){
  const navigation = useNavigation();


    return(
      <ScrollView style={{width:'100%', height:'100%'}}>
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
                  <Text style={styles.label}>Nome Completo</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Nome Completo"
                    k eyboardType="name"
                    autoCapitalize="none"
                    required
                  />
                </View>

                <View style={styles.inputContainer}>
                  <Text style={styles.label}>CPF</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="CPF"
                    keyboardType="numeric"
                    autoCapitalize="none"
                    required
                  />
                </View>

                <View style={styles.inputContainer}>
                  <Text style={styles.label}>Data de Nascimento</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="34/12/2000"
                    keyboardType="default"
                    autoCapitalize="none"
                    required
                  />
                </View>

                <View style={styles.inputContainer}>
                  <View style={styles.passwordContainer}>
                    <Text style={styles.label}>Telefone</Text>
                  </View>
                  <TextInput
                    style={styles.input}
                    placeholder="+55 (11)98765-4321"
                    autoComplete="tel-area-code"
                    required
                  />
                  
                </View>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Cadastro2')}>
                  <Text style={styles.buttonText}>Próximo</Text>
                </TouchableOpacity>

              </View>
       
            </View>  
            </ScrollView>  



    );
}
