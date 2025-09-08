import React from 'react'
import { Text, View, StyleSheet, Image} from 'react-native'
export default function Login() {
  const logoMoney = require('../assets/logo-money.png');

  return (
    <View style={styles.container}>
      <View>
        <Image source={logoMoney} style={styles.logo}/>
      </View> 
      <Text>Login</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgCtn:{
    objectFit: 'contain',
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  }
})