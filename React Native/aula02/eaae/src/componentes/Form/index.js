import React from 'react';
import { useState } from 'react';
import {View, Text, TextInput, Button} from 'react-native' ;
import ResultIMC from '../ResultImc/';
import { ImageBackground } from 'react-native-web';
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
            setMessageImc(`Seu IMC é:`);
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
            <View>
                <Text>Altura</Text>
                <TextInput
                style={{padding: 10, margin: 10, borderRadius: 10, border: 'solid'}}
                onChangeText={setHeight}
                value={heigth}
                placeholder='Ex: 1.75'
                keyboardType='numeric'
                 />

                <Text>Peso</Text>
                <TextInput
                style={{borderRadius: 10,padding: 10, margin: 10, border: 'solid'}}
                onChangeText={setWeigth}
                value={weigth}
                placeholder='Ex: 75.365'
                keyboardType='numeric'
                 />
                 <Button
                 color="red"
                 borderRadius='50px'
                 onPress={() => verificarImc()} // quando clicar no botão ele irá execultar a função chamada
                 title={textButton} />
            </View>
            <ResultIMC messageResultImc={messageImc} resultImc={imc}/>
        </View>
    );
    
}

// const style = StyleSheet.create ({
//     input: {
        
//     }
// }) ;