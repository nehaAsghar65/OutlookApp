import 'react-native-gesture-handler';
import React, { useState, useEffect } from "react";
import { Image, View, Text, TouchableOpacity, Alert } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home, LandingScreen, NewMail, MailBody, Login, Signup, Welcome, Mail, Calender, Apps, Feed, Search, Inbox } from './screens'
import CustomDrawer from "./navigation/CustomDrawer";
import messaging from '@react-native-firebase/messaging'

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const App = () => {
    const [showPicker, setShowPicker] = useState(false);
    const [filterStatus, setFilterStatus] = useState("")
    useEffect(() => {
        async function pushNotifications() {
            const fcmToken = await messaging().getToken()
            if (fcmToken) {
                console.log(fcmToken)
            }
            const unsubscribe = messaging().onMessage(async remoteMessage => {
                Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
            });
            messaging().setBackgroundMessageHandler(async remoteMessage => {

                console.log('Message handled in the background!', remoteMessage);
            })
            return unsubscribe;
        }
        pushNotifications();

    }, [])
    
    return (
        <NavigationContainer >
            <CustomDrawer/>
            {/* <Drawer.Navigator initialRouteName="Welcome" drawerContent={props => <DrawerContent {...props} />}>
                <Drawer.Screen name="Inbox" component={TabNavigation} />
            </Drawer.Navigator> */}
        </NavigationContainer>
    )
}

export default App