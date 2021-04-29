import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Card from '../Card';
import Gap from '../../atoms/Gap';
import {IconMale} from '../../../assets/icon';

const KostCard = () => {
  return (
    <View>
      <Card>
        <View style={styles.container}>
          <View style={{marginLeft: 10}}>
            <View style={styles.containerGambarKost}>
              <Image
                style={styles.gambarKost}
                source={require('../../../assets/KostImage/kost.png')}
              />
            </View>
          </View>
          <View style={{marginRight: 29}}>
            <Gap height={8} />
            <Text style={styles.namaKost}>Kost Mizpa</Text>
            <Gap height={17} />
            <View style={{alignItems: 'center'}}>
              <IconMale />
            </View>
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
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  gender: {
    fontSize: 11,
    textAlign: 'center',
  },
  alamatKost: {
    fontSize: 13,
    textAlign: 'center',
  },
  hargaKost: {
    fontSize: 13,
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
