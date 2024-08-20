import React from 'react';
import styles from './styles';
import { useNavigation, useRoute } from '@react-navigation/native'
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';

export default function Login(){

    const route = useRoute();
    const navigation = useNavigation();

    return(
      <ScrollView>
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
          <Text style={styles.label}>Endereço de email</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            autoComplete="email"
            required
          />
        </View>

        <View style={styles.inputContainer}>
          <View style={styles.passwordContainer}>
            <Text style={styles.label}>Senha</Text>
            <TouchableOpacity onPress={() => navigation.navigate('EsqueceuSenha')}>
              <Text style={styles.forgotPassword}>Esqueceu a senha?</Text>
            </TouchableOpacity>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Senha"
            secureTextEntry={true}
            autoComplete="current-password"
            required
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>
          Não é membro?{' '}
          <TouchableOpacity onPress={() => navigation.navigate('Cadastro')}>
            <Text style={{color:'white'}}>Cadastre-se</Text>
          </TouchableOpacity>
        </Text>
      </View>
    </View>
    </ScrollView>
    );
}