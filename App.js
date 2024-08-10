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

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'Tropa da Taxa',
    description: 'Era uma vez um cidadão de bem, que acabou encontrando o TAXAD'
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Até a última Taxa',
    description: 'Era uma vez um cidadão de bem, que acabou encontrando o TAXAD'
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Homem da Taxa',
    description: 'Era uma vez um cidadão de bem, que acabou encontrando o TAXAD'
  },
  {
    id: '1',
    title: 'Como sonegar imposto',
    description: 'Era uma vez um cidadão de bem, que acabou encontrando o TAXAD'
  },
];

// Leitura do title
const Item = ({elemento: item}) => {
  return(
  <List.Item
    title= {item.title}
    description= {item.description}
    // left={props => <List.Icon {...props} icon="folder" />}
    left={props => <Image {...props} style={styles.tinyLogo} source={{uri: 'https://i.pinimg.com/originals/f1/f4/ea/f1f4eabb2e148d9f38bf23c93b84ca4f.jpg'}}/>}
  />
)};

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item elemento={item} />} // Renderiza o componente
        keyExtractor={item => item.id}
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