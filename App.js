import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import Header from './components/Header';
import Input from './components/atoms/Input';
import KostCard from './components/molecules/KostCard';
import Gap from './components/atoms/Gap';

const App = () => {
  return (
    <View style={styles.screen}>
      <Header greetings="Good afternoon Clifford," />
      <Input placeholder="Search here" />
      <View style={styles.mainContent}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Gap height={20} />
          <KostCard />
          <KostCard />
          <KostCard />
          <KostCard />
          <KostCard />
        </ScrollView>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#525252',
  },
  mainContent: {
    marginTop: 12,
    flex: 1,
    marginHorizontal: 22,
    // backgroundColor: 'white',
  },
});
