import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { withNavigation } from 'react-navigation';
import ResultsDetail from './ResultsDetail';

interface Props {
  title: string
  results: any[],
  navigation: any
}

const ResultsList = ({ title, results, navigation }: Props) => {
  if (!results.length) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title} >{title}</Text>
      <FlatList 
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity onPress={() => navigation.navigate('ResultsShow', { id: item.id })}>
              <ResultsDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginLeft: 15,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5
  },
  container: {
    marginBottom: 10
  }
});

export default withNavigation(ResultsList);
