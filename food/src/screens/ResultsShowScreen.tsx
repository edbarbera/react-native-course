import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import yelp from '../api/yelp';

interface Props {
  navigation: any
}

const ResultsShowScreen = ({ navigation }: Props) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam('id');

  const getResult = async (id: string): Promise<void> => {
    const response = await yelp.get(`/${id}`);

    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList 
        showsVerticalScrollIndicator={false}
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 200
  }
});

export default ResultsShowScreen;
