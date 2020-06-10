import React from "react";
import { StyleSheet, Text, View } from "react-native";

/* <div> <span> <p> <h1> <header> <footer>
  <View /> A tag view pode ser utilizada no lugar de uma div, header, footer,
  aside (qq tipo de container, session)
  <Text /> A tag text é utilizada pra qq tipo te texto, paragrafo, negrito, h1,
  h2, etc.

  Diferenças dos componentes do React Native com o HTML:
  - Não tem semantica, nao tem resultado significativo.
  - A parte de estilizaçao, nao tem className, nao tem propriedade.
    Tem a classe StyleSheet com o metodo create pra criar estilizacao
  - TODOS os elementos sao flexbox (eles ja vem com display: flex) por padrão.
  - As propriedades são camelCase e nao snake_case ou dashed-case,
    os valores tem que estar aspas
  - Não existe herança de estilos. Tem criar uma estilizaçao para cada
    elemento/componentes
*/

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello OmniStack</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7159c1",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "bold",
  },
});
