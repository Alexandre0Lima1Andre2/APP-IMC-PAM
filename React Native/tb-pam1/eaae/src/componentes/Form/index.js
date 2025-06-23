import React from 'react';
import { useState } from 'react';
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from 'react-native' ;
import ResultIMC from '../ResultImc/';
export default function Form(){

    //Variaveis cada uma com valor especifico para Pegar valores e alteralos
    const [heigth, setHeight] = useState(null); //também pode usar dessa Forma React.useState(null)
    const [weigth, setWeigth] = useState(null);
    const [messageImc, setMessageImc] = useState('Preencha o peso e altura');
    const [imc, setImc] = useState(null);
    const [textButton, setTextButton] = useState('Calcular');

    function calcularImc(){
        return setImc((weigth/(heigth^2)).toFixed(2));
    }

    function verificarImc(){
        if(heigth != null && weigth != null){
            calcularImc();
            setHeight(null);
            setWeigth(null);
            setMessageImc(`Seu IMC é: `);
            setTextButton("Calcular Novamente")
            return
        }else{
            setImc(null);
            setTextButton("Calcular");
            setMessageImc("Preencha o peso e altura")
        }
    }

    return(
        <View>
            <View style={styles.container}>
                <Text style={styles.txtInput}>Altura</Text>
                <TextInput
                style={styles.input}
                onChangeText={setHeight}
                value={heigth}
                placeholder='Ex: 1.75'
                keyboardType='numeric'
                 />

                <Text style={styles.txtInput}>Peso</Text>
                <TextInput
                style={styles.input}
                onChangeText={setWeigth}
                value={weigth}
                placeholder='Ex: 75.365'
                keyboardType='numeric'
                 />                 <TouchableOpacity
                 style={styles.btn}
                 accessibilityLabel='Calcular IMC'
                 onPress={() => verificarImc()}
                 >
                    <Text style={styles.btnText}>{textButton}</Text>
                 </TouchableOpacity>
            </View>
            <ResultIMC messageResultImc={messageImc} resultImc={imc}/>
        </View>
    );
    
}

const styles = StyleSheet.create ({
    container:{
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 30,
    },
    txtInput:{
        color: '#000',
        fontSize: 17,
        fontWeight: 350,
        marginLeft: 2,
        textAlign: 'left',
    },
    input: {
        padding: 12,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 20,
        border: 'solid 2px grey',
        placeholderTextColor: 'grey',
        position: 'relative',
    },   
     btn:{
        top: 19,
        borderRadius: 20,
        padding: 12,
        backgroundColor: '#000080',
        alignItems: 'center',
        justifyContent: 'center',
        width: '99%',
        position: 'relative',
        marginBottom: 10,
    },
    btnText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    }
}) ;