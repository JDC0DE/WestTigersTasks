import React from 'react';
import { StyleSheet, View, Image, Text, Dimensions } from 'react-native';

import AppColors from '../config/AppColors';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

//custom component for displaying images
function AppImage({image, style, imgStyle}) {
    return (
        <View style ={[styles.container, style]}>
            {isFinite(image)? <Image source ={image} style ={[styles.image, imgStyle]}/>: <Image source ={{uri: image}} style ={styles.image}/>}
            
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        //backgroundColor: AppColors.otherColor_3,
        //height: 225,
        //width:'100%',
        justifyContent: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        alignItems:"center",
        borderRadius: 20,
        overflow:"hidden",
        marginBottom: 25,
    },
    image:{
        height: 250,
        width: 250,
       // borderRadius: 20,
        margin: 2,
    },
    
})

export default AppImage;