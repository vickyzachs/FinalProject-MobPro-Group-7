import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Card from '../Card';
import Gap from '../../atoms/Gap';

const KostCard = () => {
  return (
    <View>
      <Card>
        <View style={styles.container}>
          <View style={{marginLeft: 10}}>
            <Card>
              <View style={styles.gambarKost}></View>
            </Card>
          </View>
          <View style={{marginRight: 29}}>
            <Gap height={8} />
            <Text style={styles.namaKost}>Kost Mizpa</Text>
            <Gap height={17} />
            <Gap height={20} />
            <Text style={styles.gender}>Wanita</Text>
            <Gap height={20} />
            <Text style={styles.alamatKost}>Jalan Kanaan, Airmadidi Bawah</Text>
            <Gap height={6} />
            <Text style={styles.hargaKost}>
              Rp.750.000
              <Text style={styles.month}> /month</Text>
            </Text>
          </View>
        </View>
      </Card>
    </View>
  );
};

export default KostCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    borderRadius: 10,
    justifyContent: 'space-between',
  },
  namaKost: {
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  gender: {
    fontSize: 9,
    textAlign: 'center',
  },
  alamatKost: {
    fontSize: 12,
    textAlign: 'center',
  },
  hargaKost: {
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  month: {
    fontWeight: '100',
  },
  gambarKost: {
    width: 125,
    height: 120,
    marginTop: 7,
  },
});
