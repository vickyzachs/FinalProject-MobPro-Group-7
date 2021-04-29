import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import SearchBar from '../../components/atoms/SearchBar';
import Header from '../../components/molecules/Header';
import KostCard from '../../components/molecules/KostCard';

const HomeScreen = () => {
  return (
    <View style={styles.screen}>
      <Header greetings="Good afternoon Clifford," />
      <SearchBar placeholder="Search Here" />
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
