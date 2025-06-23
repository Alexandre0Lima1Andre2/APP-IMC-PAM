import React from "react";
import {View, Text, StyleSheet} from 'react-native' ;

export default function Title(){
    return(
        <View>
            <Text style={styles.title}>EAAE</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        color: 'white',
        fontSize: 70,
        textAlign: "center",
        paddingTop: 10,
        fontWeight: 'bold',
        width: '100%',
        bottom: 70,
        fontStyle: 'italic',
        position: 'relative',
        },
});




