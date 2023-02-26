import React from 'react';
import { Alert, Button, StatusBar, TextInput, Text, View, StyleSheet } from 'react-native';

export default class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      txtPeso: "",
      txtAltura: "",
    }
  }

  botaoCalcular = () => {
    const{txtPeso, txtAltura} = this.state;
    const peso = parseFloat(txtPeso);
    const altura = parseFloat(txtAltura);

    const imc = (altura * altura) / peso;
    let categoria = "";
    if (imc < 18.5) {
      categoria = "Abaixo do peso";
    }
    else if (imc < 25) {
      categoria = "Peso normal";
    } 
    else if (imc < 30) {
      categoria = "Acima do peso";
    }
    else {
      categoria = "Obesidade";
    }
    const mensagem = `IMC = ${imc}\n ${categoria}`;
    Alert.alert("Indice de massa corporal", mensagem);
  }

  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.text}>IMC</Text>
      <Text>Calcule o seu IMC</Text>
        <TextInput style={styles.Input} placeholder = "Peso" onChangeText={peso => this.setState({txtPeso: peso})} keyboardType="numeric"/>

        <TextInput style={styles.Input} placeholder =       "Altura" onChangeText={altura => this.setState({txtAltura: altura})} keyboardType="numeric"/>
        <Button title="Calcular" onPress={this.botaoCalcular}/>
        <StatusBar style="auto"/>

      </View>
    ); 
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

   Input: {
    width: 200,
    paddingLeft: 10,
    height: 50,
    borderColor: 'crimson',
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: '#fff',
    margin: 5,
  },

  text: {
    fontSize: 30,
  },
 
});
