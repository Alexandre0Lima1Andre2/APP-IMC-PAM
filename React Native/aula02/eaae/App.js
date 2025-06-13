import React from 'react';
import { StyleSheet,View } from 'react-native';
import Title from './src/componentes/Title/';
import Main from './src/componentes/Main/';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={{backgroundColor:'#fffff0', borderRadius:20, padding: 20 }}>
      <Title/>
      <Main/>
     </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00bfff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  

});
