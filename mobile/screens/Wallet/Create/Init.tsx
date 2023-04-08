import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import EditScreenInfo from '../../../components/EditScreenInfo';
import { Text, View } from '../../../components/Themed';
import { RootTabScreenProps } from '../../../types';
import Substract from '../../../components/icons/Substract';
import Recover from '../../../components/icons/Recover';

const Stack = createNativeStackNavigator();

export default function Init({ navigation }: any) {
  return (
    <View style={styles.container}>
      <View style={styles.recover}>
        <Recover />
        <Text style={[styles.recoverTitle]}>Recover Wallet</Text>
        <Text style={styles.recoverContent}>I already have a wallet</Text>
      </View>
      <View style={styles.create}>
        {/* <Image source={ require('../assets/images/icons/eth.png') }></Image> */}
        <Substract
          onPress={
            () => navigation.navigate('Terms')
          }
        />
        <Text style={styles.createTitle}>Create wallet</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    padding: 20,
    paddingTop: 60,
    height: '100%',
  },

  recover: {
    backgroundColor: '#7C66EB',
    borderRadius: 12,
    width: '100%',
    padding: 20,
    paddingTop: 50,
    marginBottom: 12,
    alignItems: 'center'
  },
  recoverTitle: {
    fontWeight: "600",
    fontSize: 20,
    paddingTop: 24,
    // lineHeight: "141.5%",
    textAlign: "center",
    color: "#FFFFFF",
  },
  recoverContent: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontSize: 12,
    opacity: .7,
    paddingTop: 6
  },

  create: {
    backgroundColor: '#7c66eb1a',
    borderRadius: 12,
    padding: 30,
    paddingTop: 50,
    alignItems: 'center'
  },
  createTitle: {
    paddingTop: 20,
    textAlign: "center",
    color: '#162534',
    fontSize: 20,
    fontWeight: "600",
  }
});
