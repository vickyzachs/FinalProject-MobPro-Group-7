import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

const Input = props => {
  return <TextInput style={styles.input} {...props} />;
};

export default Input;

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderRadius: 10,
    marginHorizontal: 22,
    borderColor: 'white',
    backgroundColor: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 48,
    height: 48,
    elevation: 10,
  },
});
