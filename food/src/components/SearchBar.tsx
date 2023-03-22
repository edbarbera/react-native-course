import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

interface Props {
  term: string
  onTermChange: (newTerm: string) => void
  onTermSubmit: () => void
}

const SearchBar = ({ term, onTermChange, onTermSubmit }: Props) => {
  return (
    <View style={styles.background} >
      <Feather name='search' style={styles.icon} />
      <TextInput
        autoCapitalize='none'
        style={styles.input}
        placeholder='Search'
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    marginTop: 20,
    backgroundColor: '#E0E0DE',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 20,
    flexDirection: 'row'
  },
  input: {
    flex: 1,
    fontSize: 20
  },
  icon: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 10
  }
});

export default SearchBar;