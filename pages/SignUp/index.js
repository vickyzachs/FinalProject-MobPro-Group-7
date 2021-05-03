import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IconLogo, IconMessage, IconPassword, IconUser} from '../../assets';
import {Card, Gap, TextInput} from '../../components';

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
        <TextInput placeholder="Clifford">
          <IconUser />
        </TextInput>
        <Gap height={13} />
        <TextInput placeholder="Clifford">
          <IconMessage />
        </TextInput>
        <Gap height={13} />
        <TextInput placeholder="Clifford">
          <IconPassword />
        </TextInput>
      </Card>
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
    backgroundColor: '#3C3C3C',
  },
});
