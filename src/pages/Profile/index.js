import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import { Gap } from '../../components';
import SignOut from '../SignOut';
import {launchImageLibrary} from 'react-native-image-picker';
import {showMessage} from 'react-native-flash-message';
import firebase from '../../config/Firebase';


const Profile = ({route}) => {

    const [photo, setPhoto] = useState('');
    const [hasPhoto, setHasPhoto] = useState(false);
    const [photobase64, setPhotoBase64] = useState('')
    const [setprofile, setProfile] = useState({
      nama: '',
      email: '',
    });

    const getImage = () => {
        launchImageLibrary(
          {maxHeight: 200, maxWidth: 200, includeBase64: true}, 
          res => {
            if(res.didCancel){
                setHasPhoto(false);
                showMessage({
                    message: 'Upload Photo dibatalkan',
                    type: 'default',
                    backgroundColor: '#D9435E',
                    color: 'white',
                  });
            }else {
                setPhoto(res.uri);
                setPhotoBase64(res.base64);
                setHasPhoto(true);
            }
          },
        );
    };

    return (
        <View style={styles.background}>
            <View style={styles.container1}>
              {/* <View style={styles.avatarWrapper}> */}
              <View style={styles.container}>
                <TouchableOpacity onPress={getImage}>
                    {hasPhoto && (
                        <Image source={{uri: photo}} style={styles.avatar}/>
                    )}
                    {
                        !hasPhoto && (
                    <View style={styles.ProfPict}>
                    <Text style={styles.textAddPhoto}>Add Photo</Text>
                    </View>
                    )}
                
                </TouchableOpacity>
                <View style={styles.profName}>
                <Text style={styles.textProfile}>Dummy data name</Text>
                    <Text style={styles.textEmail}>dummy@gmail.com</Text>
                </View>
              </View>
                
            </View>
            <View style={styles.centerContainer}>
                <Text style={styles.textKost}>Kost Mizpa</Text>
                <Text style={styles.textPayment}>Total Payment</Text>
                <Text style={styles.payment}>450.000</Text>
            </View>
            <Gap height={201} />
            <SignOut />
            <Gap height={55} />
        </View>
        
    );
};

export default Profile;

const styles = StyleSheet.create({
  avatarWrapper: {
    alignItems: 'center',
  },
    background: {
        flex: 1,
        backgroundColor: '#555555',
    },
    container1: {
        height: 100,
        backgroundColor: '#272629',
    },
    container: {
        paddingTop: 65,
        height: 150,
        backgroundColor: '#272629',
        borderRadius: 40,
        flexDirection: 'row',
    },
    ProfPict: {
        width: 57,
        height: 57,
        borderRadius: 100,
        backgroundColor: 'white',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 80,
    },
    textAddPhoto: {
        fontSize: 14,
        maxWidth: 40,
        textAlign: 'center'
    },
    profName: {
        marginLeft: 16,
        marginTop: 10,
    },
    textProfile: {
        alignSelf: 'center',
        fontSize: 14,
        fontWeight: 'bold',
        color: 'white',
    },
    textEmail: {
        alignSelf: 'center',
        fontSize: 14,
        color: 'white',
    },
    centerContainer: {
        alignSelf : 'center',
        backgroundColor: '#272629',
        height: 129,
        width: 311,
        alignItems: 'center',
        marginTop: 155,
        borderRadius: 5,
    },
    textKost: {
        marginVertical: 20,
        fontSize: 12,
        fontWeight: 'bold',
        color: 'white',
    },
    textPayment: {
        fontSize: 9,
        color: 'white',
    },
    payment: {
        fontSize: 22,
        fontWeight: 'bold',
        color: 'white',
    },
    avatar: {
        height: 57,
        width: 57,
        borderRadius: 90,
        marginLeft: 80,
    },
});
