import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [number, setNumber] = useState(0);

  function handleNumber (){
    const newNumber = Math.floor(Math.random() * 100)
    setNumber(newNumber)
  }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.numberTxt}>{number}</Text>
      <TouchableOpacity style={styles.generateButton} onPress={handleNumber}>
        <Text style={styles.textButton}>Gerar Número</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9102E6',
    alignItems: 'center',
    justifyContent: 'center',
  },
  generateButton:{
    backgroundColor: 'pink',
    borderRadius: 10,
    borderStyle: 'solid',
    width: 110,
    height: 20,
    alignItems: 'center'
  }, 
  textButton:{
    fontSize: 14,
    fontWeight: 'bold',
    color: 'white'
  },
  numberTxt:{
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 5,
    textDecorationLine: 'underline'
  }
});
