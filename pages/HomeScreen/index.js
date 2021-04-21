import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from '../../components/Header';
import Input from '../../components/atoms/Input';
import KostCard from '../../components/molecules/KostCard';

const HomeScreen = () => {
  return (
    <View style={styles.screen}>
      <Header greetings="Good afternoon Clifford," />
      <Input placeholder="Search here" />
      <View style={styles.mainContent}>
        <KostCard />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#525252',
  },
  mainContent: {
    marginTop: 12,
    flex: 1,
    marginHorizontal: 22,
  },
});
