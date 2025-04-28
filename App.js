import React, { useEffect } from 'react';
import { View, Text, Button, Switch, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { Icons } from './src/utilities/Constant';

import { Provider, useSelector, useDispatch } from 'react-redux';
import store, { increment , decrement} from './src/redux/store';   
import ToggleButton from './src/LanguageScreen'; 
import { I18nextProvider, useTranslation } from 'react-i18next';

import i18n from './services/i18next'; 
import { toggleLanguage, setIsPms } from './src/redux/store'; 
import { setValueTo10  } from './src/redux/store';
import LoginScreen from './src/screens/pms/login/Login_screen_pms'; 
import WelcomeScreen from './src/screens/Welcome_Screen';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './src/screens/SplashScreen';
import LoginScreenRevamp from './src/screens/revamp/LoginScreenRevamp';
import SelectProperty from './src/screens/pms/selectProperty/SelectProperty';
import Login from './src/screens/pms/login/Login';
import LoginREVAMP from './src/screens/revamp/LoginREVAMP';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashBoard from './src/screens/pms/tabnavigation/DashBoard';
import Reservation from './src/screens/pms/tabnavigation/Reservation';
import TabNav from './src/TabNav';


//user credentials to login =>> Username : Mobile App , Password : Admin@1234, access code: 00372



const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();




const MainScreen = () => {
  const dispatch = useDispatch();
  const currentLang = useSelector((state) => state.language.lang);
  const counterVal = useSelector((state) => state.l.countValue);
  const isPms = useSelector((state) => state.isPms.isPms);
  const { t } = useTranslation(); 
  let navigation = useNavigation();

  


  return (
    <View style={styles.container}>
      <Text style={styles.text}>{t("Welcome")}</Text>
      <Text style={styles.text}>{t("Change-Language")}</Text>
      <Text style= {styles.counterStyle}>Counter: {counterVal} </Text>
      <Button title='Set to 10' onPress={()=>dispatch(setValueTo10())}></Button>
      <Switch
  
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={currentLang === "en" ? "#f5dd4b" : "#f4f3f4"}
        onValueChange={() => dispatch(toggleLanguage())}
        value={currentLang === "ar"}
        style={styles.toggleButton}
      />
    </View>
  );
};


const App = () =>{
  
  console.log('d');  
  return ( 



  <Provider store={store}>
   {/* // <MainScreen /> */}
   {/* <LoginScreen /> */} 
   <NavigationContainer>
   
    <Stack.Navigator initialRouteName='SplashScreen'>
    <Stack.Screen name='SplashScreen' component={SplashScreen} options={{headerShown:false}} ></Stack.Screen>

    <Stack.Screen name='WelcomeScreen' component={WelcomeScreen} options={{headerShown:false}}
      
      ></Stack.Screen>
      <Stack.Screen name='Login' component={Login} options={{headerShown: false}} ></Stack.Screen>
      <Stack.Screen name='LoginREVAMP'  component={LoginREVAMP} options={{headerShown:false}}   ></Stack.Screen>
        <Stack.Screen name= 'LoginScreen' component={LoginScreen}
        options={{headerShown: false}}
      
      
      ></Stack.Screen>
      <Stack.Screen 
      name='LoginScreenRevamp' component={LoginScreenRevamp} options={{headerShown:false}}
      
      ></Stack.Screen>
      
      <Stack.Screen name='SelectProperty' component={SelectProperty} options={{headerShown:false}}></Stack.Screen>

      <Stack.Screen name='Tabs'  options={{headerShown: false,}} component={TabNav}></Stack.Screen>
      
      </ Stack.Navigator>

   </NavigationContainer>
   
  </Provider>
);}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#282c34",
  },
  text: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",        
    marginBottom: 20,
  },
  toggleButton: {
    transform: [{ scale: 1.2 }],
  },
  counterStyle:{
    fontSize : 20, 
    fontWeight : 'bold', 
    color : '#000000'
  }
});

export default App;
