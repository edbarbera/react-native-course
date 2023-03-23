import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList';
import useResults from '../hooks/useResults';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();

  const filterResultsByPrice = (price: string) => {
    return results.filter(result => {
      return result.price === price;
    })
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice('$')}
          title='Cost Effective $'
        />
        <ResultsList
          results={filterResultsByPrice('$$')}
          title='Bit Pricier $$'
        />
        <ResultsList
          results={filterResultsByPrice('$$$')}
          title='Big Spender $$$'
        />
        <ResultsList
          results={filterResultsByPrice('$$$$')}
          title='TOO MUCH $$$'
        />
      </ScrollView>
      { errorMessage ? <Text style={styles.errorMessage}>{errorMessage}</Text> : null }
    </>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    color: 'red'
  }
});

export default SearchScreen;
