import React from 'react';
import {ScrollView, StyleSheet, TouchableOpacity, View,Text} from 'react-native';
import {IconBell} from '../../assets';
import {Header, KostCard, SearchBar} from '../../components';

const HomeScreenMitra = () => {
  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Header greetings="Good afternoon Users," />
        <TouchableOpacity activeOpacity={0.5}>
          <IconBell />
        </TouchableOpacity>
      </View>
      <View style={styles.mainContent}>
        <ScrollView>
            <Text style={styles.TextBiasa}>My Own List Kost</Text>
          <KostCard />
          <KostCard />
        </ScrollView>
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
  TextBiasa:{
      color: 'white',
      textAlign: 'center',
  }
});

export default HomeScreenMitra;
