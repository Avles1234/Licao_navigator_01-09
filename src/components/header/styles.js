import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    viewHeader:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:8,
        marginLeft:10
    },
    textHeader:{
        fontSize:25,
        color:'white',
        fontWeight:'bold',
        marginRight:50,
        marginLeft: 50
    },
    images:{
        width: 50,
        height: 50,
        marginTop: 15,
        borderRadius: 50,
        marginLeft: -50
    }

})

export default styles;