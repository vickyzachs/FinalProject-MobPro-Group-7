import React, {useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'

const SplashScreen = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('SignIn');
        },3000);
    }, []);


    return (
        <View>
            <Text style={styles.text}>U-Kost</Text>
        </View>
    );
};

export default SplashScreen;

const styles = StyleSheet.create({
   text: {
    fontSize: 32,
    alignItems: 'center',
    justifyContent: 'center',
   },
});
