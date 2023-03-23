import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

interface Props {
  result: any
}

const ResultsDetail = ({ result }: Props) => {
  const { image_url, name, rating, review_count } = result

  return (
    <View style={styles.container}>
      <Image source={{ uri: image_url }} style={styles.restaurantImage} />
      <Text style={styles.restaurantName}>{name}</Text>
      <Text>{rating} Stars, {review_count} Reviews</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15
  },
  restaurantImage: {
    width: 250,
    height: 120,
    borderRadius: 4,
    marginBottom: 5
  },
  restaurantName: {
    fontWeight: 'bold',
    fontSize: 14
  }
});

export default ResultsDetail;
