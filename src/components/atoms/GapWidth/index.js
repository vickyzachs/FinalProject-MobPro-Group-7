import React from 'react';
import {StyleSheet, View} from 'react-native';

const GapWidth = ({width}) => {
  return <View style={styles.gap(width)} />;
};

export default GapWidth;

const styles = StyleSheet.create({
  gap: width => ({
    width: width,
  }),
});
