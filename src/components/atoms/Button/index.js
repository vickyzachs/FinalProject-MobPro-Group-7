import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Button = ({title, ...props}) => {
  return (
<<<<<<< HEAD
    <TouchableOpacity activeOpacity={0.8}>
      <View style={{...styles.container, ...props.style}}>
=======
    <TouchableOpacity activeOpacity={0.8} {...props}>
      <View style={styles.container}>
>>>>>>> 7f2aa61b88fd50edd0dc1b4fd67d407648d3f39d
        <Text style={styles.text}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    height: 45,
    borderColor: '#A9A9A9',
    borderWidth: 1,
    width: 285,
    borderRadius: 5,
    backgroundColor: '#272629',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
