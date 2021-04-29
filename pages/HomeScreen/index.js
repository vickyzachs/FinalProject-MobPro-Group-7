import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {IconBell} from '../../assets';
import {Header, KostCard, SearchBar} from '../../components';

const HomeScreen = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Header greetings="Good afternoon Clifford," />
        <TouchableOpacity activeOpacity={0.5}>
          <IconBell />
        </TouchableOpacity>
      </View>
      <SearchBar placeholder="Search here" />
      <View style={styles.mainContent}>
        <KostCard />
      </View>
    </View>
  );
};

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

export default HomeScreen;
