import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, Modal, TouchableOpacity, TextInput, Button } from 'react-native';
import logo from './src/images/logo.png'
import ComponenteModal from './src/components/Modal';

export default function App() {

  const [gasolina, setGasolina] = useState(0)
  const [alcool, setAlcool] = useState(0)
  const [modal, setModal] = useState(false)

  function showModal() {
    if(modal) {
      setModal(false)
    } else {
      setModal(true)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.areaLogo}>
          <Image 
          source={logo}
          style={styles.logo}
          />

        <Text style={styles.title}>Qual a melhor opção?</Text>
      </View>

      <View style={styles.areaInput}>
        <Text style={styles.titleInput} >Álcool (preço por litro)</Text>
        <TextInput placeholder='Digite o preço aqui...' onChangeText={(value) => setAlcool(value)} style={styles.inputAlcool}></TextInput>

        <Text style={styles.titleInput} >Gasolina (preço por litro)</Text>
        <TextInput placeholder='Digite o preço aqui...' onChangeText={(value) => setGasolina(value)} style={styles.inputAlcool}></TextInput>

        <TouchableOpacity onPress={showModal} style={styles.botao}>
          <Text style={styles.textBotao}> Calcular </Text>
        </TouchableOpacity>
      </View>

      <Modal 
        animationType='slide'
        visible={modal}
      >
        
          <ComponenteModal dadoFuncao={showModal} alcool={alcool} gasolina={gasolina} />
          
      </Modal>
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'center',
  },
  areaLogo: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  areaInput: {
    margin: 20,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    marginTop: 20,
    marginBottom: 40,
  },
  inputAlcool: {
    width: '100%',
    height: 40,
    borderRadius: 4,
    backgroundColor: '#fff',
    marginBottom: 20,
    padding: 10,
  },
  titleInput: {
    color: '#fff',
    textAlign: 'left',
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 15,
  },
  botao: {
    backgroundColor: '#FF502F',
    height: 40,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBotao: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
