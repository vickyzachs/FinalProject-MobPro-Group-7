import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

const SearchBar = ({...props}) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'white',
    backgroundColor: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    height: 48,
    elevation: 10,
    marginHorizontal: 22,
    paddingHorizontal: 28,
  },
});

export default SearchBar;
