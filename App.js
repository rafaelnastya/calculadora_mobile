import React, { useState } from 'react';
import {Text, View, StyleSheet, TextInput, TouchableOpacity,} from 'react-native';
export default function App() {
  const [n1, setn1] = useState('');
  const [n2, setn2] = useState('');

  function adicao() {
    if (n1 == '' || n2 == '') 
    {
      alert('Preencha as caixas de texto.');
    } 
    else 
    {
      const resultado = parseFloat(n1) + parseFloat(n2);
      alert(+ resultado);
    }
  }

  function subtracao() {
    if (n1 == '' || n2 == '') 
    {
      alert('Preencha as caixas de texto.');
    } 
    else {
      const resultado = parseFloat(n1) - parseFloat(n2);
      alert(+ resultado);
    }
  }

  function multiplicacao() {
    if (n1 == '' || n2 == '') 
    {
      alert('Preencha as caixas de texto.');
    } 
    else {
      const resultado = parseFloat(n1) * parseFloat(n2);
      alert(+ resultado);
    }
  }

  function divisao() {
    if (n1 == '' || n2 == '') 
    {
      alert('Preencha as caixas de texto.');
    } 
    else {
      const resultado = parseFloat(n1) / parseFloat(n2);
      alert(+ resultado);
    }
  }

  return (

    <View style={styles.container}>

      <Text style={styles.title}> Calculadora </Text>
      <TextInput
        style={styles.box1}
        keyboardType="numeric"
        placeholder="Digite um número"
        onChangeText={(n1) => setn1(n1)}/>
      <TextInput
        style={styles.box2}
        keyboardType="numeric"
        placeholder="Digite um número"
        onChangeText={(n2) => setn2(n2)}/>

      <TouchableOpacity style={styles.button} onPress={adicao}>
        <Text style={styles.button_title}> Somar (+) </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={subtracao}>
        <Text style={styles.button_title}> Subtrair (-) </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={multiplicacao}>
        <Text style={styles.button_title}> Multiplicar (*) </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={divisao}>
        <Text style={styles.button_title}> Dividir (/) </Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#a991bd',
    padding:20,
    
  },
  title: {
    margin:30,
    padding:100,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#ffffff',
  },

  box1: {
    backgroundColor: '#ac47ff',
    borderRadius: 20,
    margin: 15,
    padding: 5,
    fontSize: 25,
    textAlign: 'center',
  },

  box2: {
    backgroundColor: '#ac47ff',
    borderRadius: 20,
    margin: 15,
    padding: 5,
    fontSize: 25,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#33ff70',
    margin: 10,
    borderRadius: 10,
    padding: 5,
    alignItens: 'center',
    
    
  },
  button_title: {
    fontSize: 25,
    color: '#ffffff',
    textAlign:"center"
  },
});
