import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';


import AppDrawer from '../components/AppDrawer';
import AppColors from '../config/AppColors';
import AppIcon from '../components/AppIcon';
import AppFonts from '../config/AppFonts';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import MyTeamScreen from '../screens/MyTeamScreen';
import LearningScreen from '../screens/LearningScreen';












const Drawer = createDrawerNavigator();

const DrawNavigator = () => {
    return(
        
    <Drawer.Navigator drawerContent={props => <AppDrawer {...props}/>} screenOptions={{drawerHideStatusBarOnOpen:false,drawerStyle:{ position:'absolute', overflow: 'scroll'},  drawerActiveTintColor:AppColors.team_orange, drawerActiveBackgroundColor: AppColors.white, drawerInActiveTintColor: AppColors.black_matte, headerShown:false, swipeEnabled:false, drawerLabelStyle:{ fontFamily:AppFonts.targetOs, fontSize:13,marginLeft: -15}}}>
      <Drawer.Screen  name = "Home" component={HomeScreen} options ={{drawerIcon: () => <AppIcon size ={40} name="home" iconColor={AppColors.black_matte}/>}}/>
      <Drawer.Screen  name = "Profile" component={ProfileScreen} options ={{drawerIcon: () => <AppIcon size ={40} name="account-details" iconColor={AppColors.black_matte}/>}}/>
      <Drawer.Screen  name = "My Team" component={MyTeamScreen} options ={{drawerIcon: () => <AppIcon size ={40} name="account-multiple" iconColor={AppColors.black_matte}/>}}/>
      <Drawer.Screen  name = "Learning" component={LearningScreen} options ={{drawerIcon: () => <AppIcon size ={40} name="school" iconColor={AppColors.black_matte}/>}}/>
    </Drawer.Navigator>
   
  );
};

  export default DrawNavigator;