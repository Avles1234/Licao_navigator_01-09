import React, { Fragment } from 'react'
import {Image,Text} from 'react-native'
import styles from './styles';

const imagem = Math.floor(Math.random() * 4 +1);

export default function BannerMovies (){
    return(
        <>
            
            <Image style = {styles.imageBanner} source = {require(`../../Img/frete_gratis_1.png`)}/> 

        </>
    );
}
