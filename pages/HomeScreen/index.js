import React from 'react';
import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import {IconBell} from '../../assets/icon';
import SearchBar from '../../components/atoms/SearchBar';
import Header from '../../components/molecules/Header';
import KostCard from '../../components/molecules/KostCard';

const HomeScreen = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Header greetings="Good afternoon Clifford," />
        <TouchableOpacity activeOpacity={0.5}>
          <IconBell />
        </TouchableOpacity>
      </View>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 22,
  },
});
