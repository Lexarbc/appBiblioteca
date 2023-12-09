import React from 'react';
import { View, FlatList, Text } from 'react-native';

const App = () => {
  // Dados da lista
  const data = [
    { id: '1', title: 'Dom Casmurro', description: 'Data de devolução', date: '2023-01-02' },
    { id: '2', title: '1984', description: 'Data de devolução', date: '2023-01-03' },
    { id: '3', title: 'A Seleção', description: 'Data de devolução', date: '2023-01-04'},
  ];

  const renderItem = ({ item }) => (
    <View style={{ padding: 10, borderBottomWidth: 1, borderBottomColor: '#ccc' }}>
      <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
      <Text>{item.description}</Text>
      <Text style={{ fontStyle: 'italic' }}>{item.date}</Text>
    </View>
  );

  return (
    <View>

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default App;
