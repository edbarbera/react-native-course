import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

interface Props {
  title: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  results: any[]
}

const ResultsList = ({ title, results }: Props) => {
  return (
    <View>
      <Text style={styles.title} >{title}</Text>
      <FlatList 
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return <Text>{item.name}</Text>
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});

export default ResultsList;
