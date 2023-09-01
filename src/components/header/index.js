import React from 'react'
import {Image,View,Text, TouchableOpacity} from 'react-native'

import styles from './styles';

export default function Header(){
    return(
        <View style = {styles.viewHeader}>
         <TouchableOpacity> 
         <Image style = {styles.images} source={require(`../../ImgS/logo_1.png`)}/>
        </TouchableOpacity>  
        <Text style = {styles.textHeader}>  Alestorusto Times  </Text> 

        </View>
    );
}