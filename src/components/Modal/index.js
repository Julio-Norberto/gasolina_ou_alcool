import React from "react";
import { View, Text, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';
import bombaGas from '../../images/gas.png'

export default function Modal({dadoFuncao, alcool, gasolina}) {

    const resultado = alcool / gasolina

 return (
   <View style={styles.container} >
        <Image 
        source={bombaGas}
        style={styles.imageLogo}
        />

        <Text style={styles.title}>Compensa usar {resultado <= 0.7 ? 'Álcool' : 'Gasolina'} </Text>

        <Text style={styles.subTitle}>Com os preços:</Text>

        <Text style={styles.precos}>Álcool: {alcool} </Text>
        <Text style={styles.precos}>Gasolina: {gasolina}</Text>

        <TouchableOpacity onPress={dadoFuncao} style={styles.botaoModal}>
            <Text style={styles.textButton}> Calcular Novamente </Text>
        </TouchableOpacity>
   </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        color: 'green',
        fontSize: 25,
        marginTop: 25,
        marginBottom: 25,
    },
    subTitle: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 20,
        marginBottom: 20,
    },
    precos: {
        color: '#fff',
        fontSize: 17,
    },
    botaoModal: {
        height: 40,
        width: 250,
        marginTop: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
        borderColor: '#FF502F',
        borderWidth: 1,
        borderRadius: 4,
    },
    textButton: {
        color: '#FF502F',
        fontWeight: 'bold',
        fontSize: 15,
    }
})