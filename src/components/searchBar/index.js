import React from 'react'
import { TextInput,View,TouchableOpacity,Text } from 'react-native'
import styles from './style'


export default function Search(){

    return(
          <View  style = {styles.containerSearch}>
              <TextInput
               placeholder="Informe o produto que deseja"
               style = {styles.inputSearch}
               >
                   
               </TextInput>
               
          </View>     
           

        );

}