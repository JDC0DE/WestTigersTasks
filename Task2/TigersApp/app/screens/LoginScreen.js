import React, {useState} from 'react';
import { View, StyleSheet, TextInput, KeyboardAvoidingView, TouchableOpacity, ImageBackground} from 'react-native';
//import {MaterialCommunityIcons} from '@expo/vector-icons';
import { Formik } from 'formik';
import {useNavigation} from '@react-navigation/native';
import * as yup from 'yup';


import AppScreen from '../components/AppScreen';
import AppColors from '../config/AppColors';
import AppTextInput from '../components/AppTextInput';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import AppImage from '../components/AppImage';
//import DataManager from '../config/DataManager';

const blurRadiusValue = Platform.OS === "android" ? 0.9 : 5.5;
const schema = yup.object().shape(
{
email: yup.string().required().email().label("email"),
password: yup.string().required().min(4).max(8).label("password"),

}
);

const users = [
    {
        id: "user1",
        name: "Joshua Devine",
        email: "jd@gmail.com",
        password: "1234"
    },

    {
        id: "user2",
        name: "Barry Barn",
        email: "bb@gmail.com",
        password: "2345"
    },

    {
        id: "user3",
        name: "Kassidy Grant",
        email: "kg@gmail.com",
        password: "9092"
    },

];

const validateUser = ({email, password}) => {
    return(
        users.filter((user) => user.email === email && user.password === password).length>0
    );
}

const getUser = ({email}) => {
    return users.find((user) => user.email === email );
}

// const createUser = ({email}) => {
//     let commonData = DataManager.getInstance();
//     let userID = getUser({email}).id;
//     commonData.setUserID(userID);

//     console.log(commonData);
// }

function LoginScreen({navigation, route}) {

    const [email, setEmail] = useState(); //state variables - setEmail grabs the input from the user and stores it in the variable email
    const [password, setPassword] = useState();

    const [data, setData] = useState({
        email: '',
        password: '',
        checkTextInputChange: false,
        secureTextEntry: true,
    });

    const handleEmailChange = (values) => {
        if( values.length != 0 ){
            setData({
                ...data,
                email: values,
                checkTextInputChange: true,
            });      
        }
        else{
            setData({
                ...data,
                email: values,
                checkTextInputChange: false,
            });     
        }
    }

      const handlePasswordChange = (values) => {
        setData({
            ...data,
            password: values,
        })
    }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry,
        })
    }

    return (
        <AppScreen style ={styles.container}>
            <ImageBackground
            blurRadius={blurRadiusValue}
            source={require('../assets/6090307.jpg')}
            style={styles.imageContainer}
            >
            <View style = {styles.welcomeContainer}>
               
                    
                </View>
                <Formik
                initialValues={{email:'', password:'',}}
                onSubmit = {(values, {resetForm}) => {
                if(validateUser(values)){
                resetForm();
                data.checkTextInputChange=false;
                //createUser(values); 
                navigation.navigate("Homes", {
                    screen: "Home",
                    params:{
                        paramName: getUser(values).name,
                    }
                }
                );
            }
            else{
                resetForm();
                data.checkTextInputChange=false;
                alert("Invalid Login Details")
            }
        }}
                validationSchema={schema}
                >
            {({values, handleChange, handleSubmit, errors, setFieldTouched, touched}) => (
                <>
                <KeyboardAvoidingView behavior={'height'} enabled ={false}>
                 <View style = {styles.textInputContainer}>
                    <AppImage image={require('../assets/Wests-Tigers-logo.png')}/>
                <AppTextInput
                dataTextInput = {data.checkTextInputChange}
                name={"check-circle"}
                featColor='green'
                autoCapitalize="none"
                autoCorrect={false}
                icon = "email"
                placeholder="Username"
                keyboardType="email-address"
                textContentType="emailAddress"
                value={values.email}
                onBlur = {() => setFieldTouched("email")}
                onChangeText = {(info) => {handleEmailChange(info); setEmail(info); handleChange("email")(info);}}
                />
                {touched.email && <AppText>{errors.email}</AppText>}
                <AppTextInput
                name='eye-off'
                featColor='grey'
                autoCapitalize="none"
                autoCorrect={false}
                icon = "eye"
                placeholder="Password"
                secureTextEntry = {data.secureTextEntry ? true: false}
                textContentType="password"
                value={values.password}
                onBlur = {() => setFieldTouched("password")}
                onChangeText={(info) => {handlePasswordChange(info); setPassword(info); handleChange("password")(info);}}
                onPress={updateSecureTextEntry}
                dataSecure={data.secureTextEntry}
                />
                {touched.password && <AppText>{errors.password}</AppText>}
                <View style={styles.buttonContainer}>
                <AppButton children= "Login" onPress={handleSubmit}>

                </AppButton>
                </View>
                </View>
                </KeyboardAvoidingView>
               
                
                
                
                </>


            )}





                </Formik>

            </ImageBackground>

           
        </AppScreen>
    );
}

const styles = StyleSheet.create({
    container:{
        //flex:1,
        marginTop:0,
        //padding: 25,
    },
    welcomeContainer: {
        justifyContent: 'center',
        alignItems : 'flex-start',
        marginTop: 10,
        marginBottom: 90,
     },

     textInputContainer: {
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        marginVertical: 100,
        padding:25,
        borderRadius: 5,
        marginTop: 10,
        justifyContent: 'center',
        alignItems : 'center',
        

     },

     buttonContainer: {
        borderRadius: 10,
        width: '100%',
        marginTop: 50,
        marginStart: 0,
        marginVertical: 100,        
        
        
    },

    imageContainer:{
        flex:1,
        height: null,
        width: null,
        padding: 25,
        
    },
    
})

export default LoginScreen;