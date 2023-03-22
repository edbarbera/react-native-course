import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const searchApi = async (searchTerm: string) => {
    try {
      const { data: { businesses }} = await yelp.get('/search', {
        params: {
          sort_by: 'best_match',
          limit: 50,
          searchTerm,
          location: 'san jose'
        }
      });
  
      setResults(businesses)
    } catch (err) {
      setErrorMessage('Something went wrong');
    }
    
  };

  // Initial Search on page render

  return (
    <View>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      <Text>We have found {results.length}</Text>
      { errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null }
    </View>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    color: 'red'
  }
});

export default SearchScreen;
