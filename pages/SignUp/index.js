import React from 'react';
import {
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import {IconLogo, IconMessage, IconPassword, IconUser} from '../../assets';
import {Button, Card, Gap, TextInput} from '../../components';

const SignUp = () => {
  return (
    <View style={styles.container}>
      <View style={styles.topBackContainer}>
        <View style={styles.topBack}>
          <View style={styles.circle}>
            <View style={styles.logo}>
              <IconLogo />
            </View>
          </View>
          <Gap height={24} />
          <View style={styles.textAreaWrapper}>
            <Text style={styles.textTitle}>Sign Up </Text>
            <Text style={styles.textDescription}>
              Sign in now there are so many new boarding house waiting for you!
            </Text>
          </View>
        </View>
      </View>
      <Card style={styles.card}>
        <Gap height={24} />
        <TextInput placeholder="Username">
          <IconUser />
        </TextInput>
        <Gap height={13} />
        <TextInput placeholder="Email">
          <IconMessage />
        </TextInput>
        <Gap height={13} />
        <TextInput placeholder="Password">
          <IconPassword />
        </TextInput>
        <Gap height={41} />
        <Button />
        <Gap height={22} />
      </Card>
      <View style={styles.textSignIn}>
        <Text style={styles.text}>Already have account? </Text>
        <TouchableOpacity activeOpacity={0.7}>
          <Text
            style={{
              ...styles.text,
              textDecorationLine: 'underline',
              fontWeight: 'bold',
            }}>
            Sign In
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  topBackContainer: {
    height: 420,
    backgroundColor: '#272629',
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
  textDescription: {
    marginTop: 5,
    color: 'white',
    fontSize: 14,
  },
  card: {
    alignSelf: 'center',
    backgroundColor: '#3C3C3C',
    height: 296,
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
});
