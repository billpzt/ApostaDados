import { useState } from 'react';
import { Image, StyleSheet, Text, View, Pressable } from 'react-native';

export default function App() {
  
  // Paths das imagens
  const dadosImage = [
    require('./assets/four-leaf-clover-illustration-png.webp'),
    require('./assets/dieRed1.png'),
    require('./assets/dieRed2.png'),
    require('./assets/dieRed3.png'),
    require('./assets/dieRed4.png'),
    require('./assets/dieRed5.png'),
    require('./assets/dieRed6.png'),
  ]
  
  // Path da imagem do dado que foi apostado ou que foi sorteado, a imagem inicial é de um trevo da sorte
  const [imgDadoAposta, setImgDadoAposta] = useState(dadosImage[0]);
  const [imgDadoSorteado, setImgDadoSorteado] = useState(dadosImage[0]);
  
  // Número do dado, o que foi apostado e o que foi sorteado
  const [dadoApostado, setDadoApostado] = useState(0);
  const [dadoSorteado, setDadoSorteado] = useState(0);
  
  // Dinheiro do saldo e valores que podem ser apostados pelo usuário
  const [saldo, setSaldo] = useState(100.00);
  const [valorApostado, setValorApostado] = useState([5.00, 10.00, 15.00, 20.00]);

  // Função chamada quando o botão numérico é tocado
  const escolherDado = (numeroBotao) => {
    setDadoApostado(numeroBotao);
    setImgDadoAposta(dadosImage[numeroBotao])
  }

  const apostar = () => {
    setDadoSorteado(Math.floor(Math.random() * 6));
    console.log(dadoSorteado);
    setImgDadoSorteado(dadosImage[dadoSorteado]);
    if (dadoApostado == dadoSorteado) {
      console.log('Você acertou!');
    } else {
      console.log('Você errou!');
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
            source={imgDadoAposta}
          />
        </View>
        <View>
        <Image
          style={styles.imagem}
          source={imgDadoSorteado}
        />
        </View>
      </View>
      
      <View style={styles.aposta}>
        <Text>Aqui será escolhido o valor da aposta</Text>
      </View>
      
      <View style={styles.areaBotoes}>
        <View style={styles.botoesPrimeiraLinha}>
          <Pressable style={styles.botao} onPress={() => escolherDado(1)}>
            <Text style={styles.text}>1</Text>
          </Pressable>
          <Pressable style={styles.botao} onPress={() => escolherDado(2)}>
            <Text style={styles.text}>2</Text>
          </Pressable>
          <Pressable style={styles.botao} onPress={() => escolherDado(3)}>
            <Text style={styles.text}>3</Text>
          </Pressable>
        </View>
        <View style={styles.botoesPrimeiraLinha}>
          <Pressable style={styles.botao} onPress={() => escolherDado(4)}>
            <Text style={styles.text}>4</Text>
          </Pressable>
          <Pressable style={styles.botao} onPress={() => escolherDado(5)}>
            <Text style={styles.text}>5</Text>
          </Pressable>
          <Pressable style={styles.botao} onPress={() => escolherDado(6)}>
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
