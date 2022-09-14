import React from 'react';
import { StyleSheet, View, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import AppIcon from '../components/AppIcon';
import AppScreen from '../components/AppScreen';
import AppColors from '../config/AppColors';

function LearningScreen({navigation}) {
    return (
        <AppScreen style={styles.container} backgroundColor={AppColors.otherColor_3} barStyle={"dark-content"}>
            <View style={styles.headerContainer}>
                <TouchableOpacity onPress={() => navigation.openDrawer()} activeOpacity={0.8}>
                            <AppIcon name="menu" size={55} borderRadius={20}  iconColor={AppColors.textColor} elevation={0}/>
                </TouchableOpacity>
                
            </View>
            
        </AppScreen>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: AppColors.otherColor_3,
        
        //marginTop: 20,
    },
    headerContainer:{
        flex: 0.5,
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems : 'flex-start',
        marginTop: 10,
        //marginBottom: 90,
    },
})

export default LearningScreen;