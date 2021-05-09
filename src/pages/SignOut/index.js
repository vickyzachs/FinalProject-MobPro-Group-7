import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'

const SignOut = ({navigation}) => {
    return (
            <View style={styles.logout}>
            <TouchableOpacity activeOpacity={0.7}>
                <View style={styles.logoutIcon}>
                    {/* <Logout /> */}
                </View>
                <Text style ={{
                    ...styles.textlogout,
                    textDecorationLine: 'underline',
                    fontWeight: 'bold',
                }}
                onPress={() => navigation.navigate('SignIn')}
                >Log Out</Text>
            </TouchableOpacity>
            </View>
    )
}

export default SignOut;

const styles = StyleSheet.create({
    logout: {
        marginTop: 20,
        alignSelf: 'center',
        width: 50,
    },
    textlogout: {
        color: 'white',
    },
    logoutIcon: {
        minWidth:'100%',
    }
})
