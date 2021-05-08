import React from 'react';
import {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {IconBell} from '../../assets';
import {Header, KostCard, Modal, SearchBar} from '../../components';

const HomeScreen = () => {
  const [toggleModal, setToggleModal] = useState(false);
  return (
    <View style={{...styles.screen}}>
      <View style={styles.header}>
        <Modal visible={toggleModal} />
        <Header greetings="Good afternoon Clifford," />
        <TouchableOpacity activeOpacity={0.5}>
          <IconBell />
        </TouchableOpacity>
      </View>
      <SearchBar placeholder="Search here" />
      <View style={styles.mainContent}>
        <ScrollView>
          <TouchableOpacity
            onPress={() => {
              setToggleModal(!toggleModal);
            }}
            activeOpacity={0.9}>
            <KostCard />
          </TouchableOpacity>
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
});

export default HomeScreen;
