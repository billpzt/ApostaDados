import { useState } from 'react';
import { Image, StyleSheet, Text, View, Pressable } from 'react-native';

export default function App() {

  const [textoSuperior, setTextoSuperior] = useState('Faça sua aposta e boa sorte!')
  
  // Paths das imagens, só renderiza no React Native se colocar cada uma com require 
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
  const [dadoSorteado, setDadoSorteado] = useState(Math.floor(Math.random() * 6)+1);
  
  // Dinheiro do saldo e valores que podem ser apostados pelo usuário
  const [saldo, setSaldo] = useState(100.00);
  const valoresApostas = [5.00, 10.00, 15.00, 20.00];
  const [valorApostado, setValorApostado] = useState(0.00);

  // Função que estabelece o valor apostado dependendo do botão tocado
  const escolherValorAposta = (valor) => {
    setValorApostado(valor);
  }

  // Função chamada quando o botão numérico é tocado
  const escolherDado = (numeroBotao) => {
    setDadoApostado(numeroBotao);
    setImgDadoAposta(dadosImage[numeroBotao])
  }

  const apostar = () => {
    setDadoSorteado(Math.floor(Math.random() * 6)+1);
    setImgDadoSorteado(dadosImage[dadoSorteado]);
    if (dadoApostado == dadoSorteado) {
      setSaldo(saldo + valorApostado);
      setTextoSuperior('Ganhou!');
    } else {
      setSaldo(saldo - valorApostado);
      setTextoSuperior('Perdeu!');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.grana}>
        <Text style={styles.granaSaldo}>Saldo: R${saldo}</Text>
      </View>

      <Text style={styles.textoTopo}>{textoSuperior}</Text>

      <View style={styles.imagensDados}>
          <Image
            style={styles.imagem}
            source={imgDadoAposta}
          />
        <Image
          style={styles.imagem}
          source={imgDadoSorteado}
        />
      </View>
      
      <View style={styles.aposta}>
        <Pressable style={styles.botaoValores} onPress={() => escolherValorAposta(valoresApostas[0])}>
          <Text style={styles.text}>R${valoresApostas[0]}</Text>
        </Pressable>
        <Pressable style={styles.botaoValores} onPress={() => escolherValorAposta(valoresApostas[1])}>
          <Text style={styles.text}>R${valoresApostas[1]}</Text>
        </Pressable>
        <Pressable style={styles.botaoValores} onPress={() => escolherValorAposta(valoresApostas[2])}>
          <Text style={styles.text}>R${valoresApostas[2]}</Text>
        </Pressable>
        <Pressable style={styles.botaoValores} onPress={() => escolherValorAposta(valoresApostas[3])}>
          <Text style={styles.text}>R${valoresApostas[3]}</Text>
        </Pressable>
        
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
      <Pressable style={styles.botaoApostar} onPress={apostar}>
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
  granaEscolhida: {
    backgroundColor: 'darkgreen',
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
    flexDirection: 'row',
    width: 'auto',
    justifyContent: 'space-between'
  },
  imagem: {
    width: 150,
    height: 150,
    marginLeft: 2,
    marginRight: 2
  },
  botaoValores: {
    backgroundColor: 'lightgreen',
    marginRight: 20,
    marginLeft: 20,
    justifyContent: 'space-around',
    padding: 10
  },
  aposta: {
    marginTop: 10,
    marginBottom: 10,
    borderColor: 'black',
    borderRadius: 1,
    flexDirection: 'row'
  },
  botaoApostar: { 
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 25,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'green',
    marginTop: 10
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
