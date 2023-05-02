import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, StyleSheet, Text, View, Pressable } from 'react-native';

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
  const [saldo, setSaldo] = useState(100.00)
  const [valorApostado, setValorApostado] = useState(
    [
      5.00, 10.00, 15.00, 20.00
    ])

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
      <View style={styles.grana}>
        <Text style={styles.granaSaldo}>Saldo: R${saldo}</Text>
      </View>

      <Text style={styles.textoTopo}>Faça sua aposta e boa sorte!</Text>

      <View style={styles.imagensDados}>
        <View>
          <Image
            style={styles.imagem}
            // source={require(dadosImage[dadosIndex])}
          />
        </View>
        <View>
        <Image
          style={styles.imagem}
          // source={require(dadosImage[dadosIndex])}
        />
        </View>
      </View>
      
      <View style={styles.aposta}>
        <Text>Aqui será escolhido o valor da aposta</Text>
      </View>
      
      <View style={styles.areaBotoes}>
        <View style={styles.botoesPrimeiraLinha}>
          <Pressable style={styles.botao} onPress={() => escolherNumero(1)}>
            <Text style={styles.text}>1</Text>
          </Pressable>
          <Pressable style={styles.botao} onPress={() => escolherNumero(2)}>
            <Text style={styles.text}>2</Text>
          </Pressable>
          <Pressable style={styles.botao} onPress={() => escolherNumero(3)}>
            <Text style={styles.text}>3</Text>
          </Pressable>
        </View>
        <View style={styles.botoesPrimeiraLinha}>
          <Pressable style={styles.botao} onPress={() => escolherNumero(4)}>
            <Text style={styles.text}>4</Text>
          </Pressable>
          <Pressable style={styles.botao} onPress={() => escolherNumero(5)}>
            <Text style={styles.text}>5</Text>
          </Pressable>
          <Pressable style={styles.botao} onPress={() => escolherNumero(6)}>
            <Text style={styles.text}>6</Text>
          </Pressable>
        </View>
      </View>
      <Pressable style={styles.botao} onPress={() => apostar}>
        <Text style={styles.text}>Apostar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  grana: {
    backgroundColor: 'green',
    marginBottom: 10
  },
  granaSaldo: {
    fontSize: 25,
    lineHeight: 30,
    fontWeight: 'bold',
    color: 'white',
    padding: 10
  },
  textoTopo: {
    marginBottom: 10
  },
  imagensDados: {
    flexDirection: 'row'
  },
  imagem: {
    width: 150,
    height: 150,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 2,
    marginLeft: 2,
    marginRight: 2

  },
  aposta: {
    marginTop: 10,
    marginBottom: 10,
    borderColor: 'black',
    borderRadius: 1
  },
  botaoApostar: { 
    backgroundColor: 'blue'
  },
  botoesPrimeiraLinha: {
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10
  },
  botoesSegundaLinha: {
    flexDirection: 'row',
    justifyContent:'space-around',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 10
  },
  areaBotoes: {
    width: 200
  },
  botao: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 25,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
});
