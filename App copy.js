import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
  Image,
  Text,
  StatusBar,
} from 'react-native';


import {List} from 'react-native-paper'
import Produtos from './data/Produtos';

// Leitura do title
const Item = ({elemento: item}) => {
  return(
  <List.Item
    title= {item.title}
    description= {item.description}
    // left={props => <List.Icon {...props} icon="folder" />}
    
    left={props => <Image {...props} style={styles.tinyLogo} source={{uri:item.urlImagem}}/>}
  />
)};

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={Produtos}
        renderItem={({item}) => <Item elemento={item} />} // Renderiza o componente
        keyExtractor={item => item.id} // identificar os elementos
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});

export default App;