import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Calculator() {
  const [result, setResult] = useState('0');

   const handlePress = (value) => {
    if (value == '+/-') {
      setResult(parseFloat(result) * -1 + '');
    } else if (result === '0') {
      setResult(value); 
    } else {
      setResult(result + value); 
    }
  };


  const handleCalculate = () => {
    setResult(eval(result));
  };

  const handleClear = () => {
    setResult('0');
  };

  return (
    <View style={styles.container}>
      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>{result}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => handleClear()} style={styles.button2}>
          <Text style={styles.buttonText}>AC</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('+/-')} style={styles.button2}>
          <Text style={styles.buttonText}>+/-</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('%')} style={styles.button2}>
          <Text style={styles.buttonText} >%</Text>

        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('/')} style={styles.button1}>
          <Text style={styles.buttonText }>/</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => handlePress('7')} style={styles.button}>
          <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('8')} style={styles.button}>
          <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('9')} style={styles.button}>
          <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('*')} style={styles.button1}>
          <Text style={styles.buttonText}>*</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => handlePress('4')} style={styles.button}>
          <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('5')} style={styles.button}>
          <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('6')} style={styles.button}>
          <Text style={styles.buttonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('-')} style={styles.button1}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
         <TouchableOpacity onPress={() => handlePress('1')} style={styles.button}>         <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('2')} style={styles.button}>
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>
         <TouchableOpacity onPress={() => handlePress('3')} style={styles.button}>
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>
       
        <TouchableOpacity onPress={() => handlePress('+')} style={styles.button1}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
         <TouchableOpacity onPress={() => handlePress('0')} style={styles.button3}>         <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handlePress('.')} style={styles.button}>
          <Text style={styles.buttonText}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleCalculate()} style={styles.button1}>
          <Text style={styles.buttonText}>=</Text>
        </TouchableOpacity>
       
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  resultContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    backgroundColor: 'black',
    padding: 15,
  },
  resultText: {
    fontSize: 30,
    color:'white',
    fontWeight:'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: 5,
  },
  button: {
    flex: 1,
    margin: 5,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button3: {
    flex: 2.6,
    margin: 5,
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    fontSize: 20,
    fontWeight:'bold',
  },
 button1: {
    flex: 1,
    margin: 5,
    backgroundColor: 'orange',
    borderRadius: 5,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
   button2: {
    flex: 1,
    margin: 5,
    backgroundColor: 'grey',
    borderRadius: 5,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});