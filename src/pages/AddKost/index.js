import React, {useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {showMessage} from 'react-native-flash-message';
import {launchImageLibrary} from 'react-native-image-picker';
import RadioForm from 'react-native-simple-radio-button';
import {IconLogo, LogoUpload} from '../../assets';
import {Button, Card, Gap, Header, TextInput} from '../../components';
import firebase from '../../config/Firebase';

const AddKost = ({navigation}) => {
  const [namaKost, setNamaKost] = useState('');
  const [alamatKost, setAlamatKost] = useState('');
  const [hargaKost, setHargaKost] = useState('');
  const [tipeKost, setTipe] = useState('');

  const [photo, setPhoto] = useState('');
  const [hasPhoto, setHasPhoto] = useState(false);
  const [photoBase64, setPhotoBase64] = useState('');

  const onSubmit = () => {
    const data = {
      namaKost: namaKost,
      alamatKost: alamatKost,
      hargaKost: hargaKost,
      tipeKost: tipeKost,
      photo: photoBase64,
    };
    console.log(data);
    firebase.database().ref('mitraKost').push(data);
  };

  const radio_props = [
    {label: 'Laki-Laki', value: 'Laki-Laki'},
    {label: 'Perempuan', value: 'Perempuan'},
  ];

  const getKostImage = () => {
    launchImageLibrary(
      {maxHeight: 120, maxWidth: 120, includeBase64: true},
      res => {
        if (res.didCancel) {
          setHasPhoto(false);
          showMessage({
            message: 'Upload foto dibatalkan',
            type: 'default',
            backgroundColor: '#09435E',
            color: 'white',
          });
        } else {
          setPhoto(res.uri);
          setPhotoBase64(res.base64);
          setHasPhoto(true);
        }
      },
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <View style={styles.logo}>
          <IconLogo />
        </View>
      </View>
      <Gap height={24} />
      <View style={styles.textAreaWrapper}>
        <Header greetings="Good afternoon Users," style={styles.customHeader} />
        <Text style={styles.textBiasa}>Tambah Kost</Text>
      </View>
      <Card style={styles.card}>
        <Gap height={20} />
        <TouchableOpacity activeOpacity={0.7} onPress={getKostImage}>
          {hasPhoto && <Image source={{uri: photo}} />}
          <View style={styles.photo}>
            <LogoUpload />
          </View>
        </TouchableOpacity>
        <Gap height={20} />
        <TextInput
          placeholder="Masukan nama kost"
          value={namaKost}
          onChangeText={value => setNamaKost(value)}
        />
        <Gap height={20} />
        <TextInput
          placeholder="Masukan alamat kost"
          value={alamatKost}
          onChangeText={value => setAlamatKost(value)}
        />
        <Gap height={20} />
        <TextInput
          placeholder="Masukan harga kost"
          value={hargaKost}
          onChangeText={value => setHargaKost(value)}
        />
        <Gap height={20} />
        <Text style={styles.textBiasa}>Pilih tipe kost anda</Text>
        <Gap height={5} />
        <View>
          <RadioForm
            radio_props={radio_props}
            initial={2}
            buttonColor={'white'}
            labelColor={'white'}
            formHorizontal={false}
            onPress={tipe => {
              setTipe({value: tipe});
            }}
            selectedLabelColor={'white'}
          />
        </View>
        <Gap height={5} />
        <Button title="Submit" onPress={onSubmit} />
      </Card>
    </View>
  );
};

export default AddKost;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#555555',
  },
  topBack: {
    backgroundColor: '#272629',
    height: 445,
    borderRadius: 25,
  },
  circle: {
    height: 76,
    width: 76,
    marginTop: 76,
    backgroundColor: 'white',
    borderRadius: 76,
    alignSelf: 'center',
  },
  logo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 1,
    marginRight: 5,
  },
  textAreaWrapper: {
    flex: 1,
    marginHorizontal: 22,
  },
  textTitle: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  card: {
    alignSelf: 'center',
    backgroundColor: '#3C3C3C',
    height: 450,
    width: 333,
    top: 270,
    position: 'absolute',
  },
  textSignIn: {
    marginTop: 210,
    height: 50,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  text: {
    fontSize: 16,
    color: 'white',
  },
  photo: {
    width: 285,
    height: 66,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  textBiasa: {
    color: 'white',
    textAlign: 'center',
  },
  inputText: {
    width: 285,
    height: 45,
    borderRadius: 5,
    backgroundColor: 'white',
    fontSize: 18,
    paddingHorizontal: 20,
  },
});
