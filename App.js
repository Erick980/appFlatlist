import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  StyleSheet,
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

const Item = ({item}) => {
  console.warn(item)
  return(
  <List.Item
    title="Título qualquer"
    description="Item description"
    left={props => <List.Icon {...props} icon="folder" />}
  />
)};

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item} />} // Renderiza dados
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
});

export default App;