import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  const [dadosImage, setDadosImage] = useState([
    './assets/four-leaf-clover-illustration-png.webp',
    './assets/dieRed1.png',
    './assets/dieRed2.png',
    './assets/dieRed3.png',
    './assets/dieRed4.png',
    './assets/dieRed5.png',
    './assets/dieRed6.png',
  ])
  const [dadosIndex, setDadosIndex] = useState(0);
  const [numeroApostado, setNumeroApostado] = useState(0);

  const escolherNumero = (numeroBotao) => {
    setNumeroApostado(numeroBotao);
  }

  let jogadaAleatoria = 0;

  const apostar = () => {
    jogadaAleatoria = Math.floor(Math.random() * 6);
    if (numeroApostado == jogadaAleatoria) {
      
    }
  }

  return (
    <View style={styles.container}>
      <Text>Faça sua aposta e boa sorte!</Text>
      <Image
        style={styles.imagem}
        // source={require(dadosImage[dadosIndex])}
      />
      <View style={styles.aposta}>

      </View>
      <View style={styles.botoes}>
        <View style={styles.botoesPrimeiraLinha}>
          <Button 
            style={styles.botoesTexto}
            title="1"
            onPress={() => escolherNumero(1)}
          />
          <Button 
            style={styles.botoesTexto}
            title="2"
            onPress={() => escolherNumero(2)}
          />
          <Button 
            style={styles.botoesTexto}
            title="3"
            onPress={() => escolherNumero(3)}
          />
        </View>
        <View style={styles.botoesSegundaLinha}>
          <Button 
            style={styles.botoesTexto}
            title="4" 
            onPress={() => escolherNumero(4)}
          />
          <Button 
            style={styles.botoesTexto}
            title="5"
            onPress={() => escolherNumero(5)}
          />
          <Button 
            style={styles.botoesTexto}
            title="6"
            onPress={() => escolherNumero(6)}
          />
        </View>
        <Button 
          style={styles.botaoApostar}
          title="Apostar"
          onPress={() => apostar}
          />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  botaoApostar: { 
    backgroundColor: 'blue'
  },
  botoesPrimeiraLinha: {
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems: 'center',
  },
  botoesSegundaLinha: {
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems: 'center',
  },
  botoes: {
    width: 200
  },
  botoesTexto: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  imagem: {
    width: 200,
    height: 200,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
