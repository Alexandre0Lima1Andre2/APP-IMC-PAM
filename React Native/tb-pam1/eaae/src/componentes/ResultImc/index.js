import React from "react";
import { View ,Text, StyleSheet} from "react-native";
import style from "./style";

export default function ResultIMC(props){
    return(
        <View>
            <Text style={style.resultImc}>{props.messageResultImc}{ props.resultImc}</Text>
            <Text style={style.texto}></Text>
        </View>
    )
}