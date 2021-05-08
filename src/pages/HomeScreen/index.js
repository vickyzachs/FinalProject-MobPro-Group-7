import React, {useEffect, useState} from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal as ModalRN,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {IconBell, IconMale} from '../../assets';
import {Button, Card, Gap, Header, KostCard, SearchBar} from '../../components';
import firebase from '../../config/Firebase';

const HomeScreen = () => {
  const [dataKost, setDataKost] = useState([]);
  const dispatch = useDispatch();
  const [selectedKost, setSelectedKost] = useState({});
  const [toggleModal, setToggleModal] = useState(false);

  useEffect(() => {
    firebase
      .database()
      .ref('mitraKost')
      .on('value', res => {
        if (res.val()) {
          //Ubah data jadi Array
          const rawData = res.val();
          const mitraKostArr = [];
          Object.keys(rawData).map(item => {
            mitraKostArr.push({
              id: item,
              ...rawData[item],
            });
          });
          setDataKost(mitraKostArr);
        }
      });
  }, []);

  return (
    <View style={{...styles.screen}}>
      <ModalRN transparent={true} animationType="fade" visible={toggleModal}>
        <View style={{flex: 1, backgroundColor: '#000000aa'}}>
          <TouchableOpacity
            style={{flex: 1}}
            activeOpacity={0.9}
            onPress={() => {
              setToggleModal(!toggleModal);
            }}>
            <Card
              style={{
                height: 210,
                width: 350,
                alignSelf: 'center',
                marginTop: 250,
                padding: 5,
              }}>
              <View style={styles.container}>
                <View style={{marginLeft: 10}}>
                  <View style={styles.containerGambarKost}>
                    <Image
                      style={styles.gambarKost}
                      source={require('../../assets/KostImage/kost.png')}
                    />
                  </View>
                </View>
                <View style={{marginRight: 29}}>
                  <Gap height={8} />
                  <Text style={styles.namaKost}>{selectedKost}</Text>
                  <Gap height={17} />
                  <View style={{alignItems: 'center'}}>
                    <IconMale />
                  </View>
                  <Text style={styles.gender}>Wanita</Text>
                  <Gap height={20} />
                  <Text style={styles.alamatKost}>
                    Jalan Kanaan, Airmadidi Bawah
                  </Text>
                  <Gap height={6} />
                  <Text style={styles.hargaKost}>
                    Rp.750.000
                    <Text style={styles.month}> /month</Text>
                  </Text>
                </View>
              </View>
              <Button title="Book Now" style={{width: 340, marginTop: 10}} />
            </Card>
          </TouchableOpacity>
        </View>
      </ModalRN>

      <View style={styles.header}>
        <Header greetings="Good afternoon Clifford," />
        <TouchableOpacity activeOpacity={0.5}>
          <IconBell />
        </TouchableOpacity>
      </View>
      <SearchBar placeholder="Search here" />
      <View style={styles.mainContent}>
        <ScrollView>
          {dataKost.map(item => (
            <KostCard
              key={item.id}
              imageKost={item.photo}
              namaKost={item.kostName}
              alamat={item.address}
              kostPrice={item.kostPrice}
              onPress={() => {
                setSelectedKost(item);
                console.log(selectedKost);
                setToggleModal(!toggleModal);
              }}
            />
          ))}
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
  container: {
    flexDirection: 'row',
    width: 340,
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  namaKost: {
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  gender: {
    fontSize: 9,
    textAlign: 'center',
  },
  alamatKost: {
    fontSize: 11,
    textAlign: 'center',
  },
  hargaKost: {
    fontSize: 11,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  month: {
    fontWeight: '100',
  },
  gambarKost: {
    maxWidth: 120,
    height: 120,
    maxHeight: 120,
    borderRadius: 10,
  },
  containerGambarKost: {
    justifyContent: 'center',
    flex: 1,
  },
});

export default HomeScreen;
