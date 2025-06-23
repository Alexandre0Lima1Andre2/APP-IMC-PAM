import React from 'react';
import { StyleSheet,View } from 'react-native';
import Title from './src/componentes/Title/';
import Main from './src/componentes/Main/';
import { LinearGradient } from 'expo-linear-gradient';


export default function App() {
  return (
    <View style={styles.container}>
      <LinearGradient  colors={['#000080', '#4169e1', '#4682b4']} style={styles.container}>
        <Title/>
        <Main/>
      </LinearGradient>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
