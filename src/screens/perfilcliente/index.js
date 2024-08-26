import React, { useState, useEffect } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView, Button, Alert } from 'react-native';
import styles from './styles';
import DATACLI from '../../Data/DataCliente';

export default function PerfilCliente() {
  const route = useRoute();
  const navigation = useNavigation();
  const { id } = route.params || {};
  
  const [cliente, setCliente] = useState(null);

  useEffect(() => {
    const foundCliente = DATACLI.find(cli => cli.id === id);
    setCliente(foundCliente);
  }, [id]);

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(cliente ? {
    email: cliente.emailCliente,
    senha: cliente.senhaCliente,
    nome: cliente.nomeCliente,
    cpf: cliente.cpfCliente,
    nascimento: cliente.nascimentoCliente,
    telefone: cliente.telefoneCliente,
    cep: cliente.cepCliente,
    bairro: cliente.bairroCliente,
    cidade: cliente.cidadeCliente,
  } : {});

  useEffect(() => {
    if (cliente) {
      setFormData({
        email: cliente.emailCliente,
        senha: cliente.senhaCliente,
        nome: cliente.nomeCliente,
        cpf: cliente.cpfCliente,
        nascimento: cliente.nascimentoCliente,
        telefone: cliente.telefoneCliente,
        cep: cliente.cepCliente,
        bairro: cliente.bairroCliente,
        cidade: cliente.cidadeCliente,
      });
    }
  }, [cliente]);

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  const handleConfirm = () => {
    Alert.alert('Confirmar', 'As alterações foram salvas.');
    setIsEditing(false);
  };

  if (!cliente) {
    return (
      <View style={styles.containerPerfil}>
        <Text style={styles.titleText}>Cliente não encontrado.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.background}>
      <View style={styles.containerPerfil}>
        <Text style={styles.titleText}>Your Profile</Text>
        <Image source={{ uri: cliente.imgCliente }} style={styles.foto} alt="Sua foto" />
        <Text style={styles.nameText}>{cliente.nomeCliente}</Text>
        <Text style={styles.bioText}>{cliente.cidadeCliente}</Text>
      </View>

      {/* Conta Section */}
      <View style={styles.containerInfo}>
        <View style={styles.infoPessoal}>
          <Text style={styles.textInfoCont}>Conta</Text>
          <TouchableOpacity onPress={handleEditToggle}>
            <Text style={styles.textInfoCont}>Edit</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.containerCard}>
          <View style={[styles.cardInfo, styles.firstCard]}>
            <Text style={styles.textInfo}>Email</Text>
            {isEditing ? (
              <TextInput
                style={styles.textInput}
                value={formData.email}
                onChangeText={(text) => handleInputChange('email', text)}
              />
            ) : (
              <Text style={styles.textInfo}>{formData.email}</Text>
            )}
          </View>
          <View style={[styles.cardInfo, styles.lastCard]}>
            <Text style={styles.textInfo}>Senha</Text>
            {isEditing ? (
              <TextInput
                style={styles.textInput}
                value={formData.senha}
                onChangeText={(text) => handleInputChange('senha', text)}
                secureTextEntry={true}
              />
            ) : (
              <Text style={styles.textInfo}>{formData.senha}</Text>
            )}
          </View>
        </View>
      </View>

      {/* Perfil Section */}
      <View style={styles.containerInfo}>
        <View style={styles.infoPessoal}>
          <Text style={styles.textInfoCont}>Perfil</Text>
          <TouchableOpacity onPress={handleEditToggle}>
            <Text style={styles.textInfoCont}>Edit</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.containerCard}>
          <View style={[styles.cardInfo, styles.firstCard]}>
            <Text style={styles.textInfo}>Nome</Text>
            {isEditing ? (
              <TextInput
                style={styles.textInput}
                value={formData.nome}
                onChangeText={(text) => handleInputChange('nome', text)}
              />
            ) : (
              <Text style={styles.textInfo}>{formData.nome}</Text>
            )}
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.textInfo}>CPF</Text>
            {isEditing ? (
              <TextInput
                style={styles.textInput}
                value={formData.cpf}
                onChangeText={(text) => handleInputChange('cpf', text)}
              />
            ) : (
              <Text style={styles.textInfo}>{formData.cpf}</Text>
            )}
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.textInfo}>Nascimento</Text>
            {isEditing ? (
              <TextInput
                style={styles.textInput}
                value={formData.nascimento}
                onChangeText={(text) => handleInputChange('nascimento', text)}
              />
            ) : (
              <Text style={styles.textInfo}>{formData.nascimento}</Text>
            )}
          </View>
          <View style={[styles.cardInfo, styles.lastCard]}>
            <Text style={styles.textInfo}>Telefone</Text>
            {isEditing ? (
              <TextInput
                style={styles.textInput}
                value={formData.telefone}
                onChangeText={(text) => handleInputChange('telefone', text)}
              />
            ) : (
              <Text style={styles.textInfo}>{formData.telefone}</Text>
            )}
          </View>
        </View>
      </View>

      {/* Localização Section */}
      <View style={styles.containerInfo}>
        <View style={styles.infoPessoal}>
          <Text style={styles.textInfoCont}>Localização</Text>
          <TouchableOpacity onPress={handleEditToggle}>
            <Text style={styles.textInfoCont}>Edit</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.containerCard}>
          <View style={[styles.cardInfo, styles.firstCard]}>
            <Text style={styles.textInfo}>CEP</Text>
            {isEditing ? (
              <TextInput
                style={styles.textInput}
                value={formData.cep}
                onChangeText={(text) => handleInputChange('cep', text)}
              />
            ) : (
              <Text style={styles.textInfo}>{formData.cep}</Text>
            )}
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.textInfo}>Bairro</Text>
            {isEditing ? (
              <TextInput
                style={styles.textInput}
                value={formData.bairro}
                onChangeText={(text) => handleInputChange('bairro', text)}
              />
            ) : (
              <Text style={styles.textInfo}>{formData.bairro}</Text>
            )}
          </View>
          <View style={[styles.cardInfo, styles.lastCard]}>
            <Text style={styles.textInfo}>Cidade</Text>
            {isEditing ? (
              <TextInput
                style={styles.textInput}
                value={formData.cidade}
                onChangeText={(text) => handleInputChange('cidade', text)}
              />
            ) : (
              <Text style={styles.textInfo}>{formData.cidade}</Text>
            )}
          </View>
        </View>
      </View>

      {isEditing && (
        <View style={styles.containerBotoes}>
          <Button title="Cancelar" onPress={handleCancel} color="#FF0000" />
          <Button title="Confirmar" onPress={handleConfirm} color="#00FF00" />
        </View>
      )}
    </ScrollView>
  );
}
