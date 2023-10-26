import 'react-native-gesture-handler';
import React, { useState, useEffect } from "react";
import { Image, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { Home, LandingScreen, NewMail, MailBody, Login, Signup, Welcome, Mail, Calender, Apps, Feed, Search, Inbox } from '../screens';
import TabNavigation from './TabNavigation';
import { IconButton, MailOptions, PickerList } from '../components';
import { icons, COLORS, FONTS, SIZES, dummyData } from '../constants';

const Stack = createStackNavigator();

const MainStackNavigator = () => {
    const [showPicker, setShowPicker] = useState(false);
    const [filterStatus, setFilterStatus] = useState("Filter")


    const handleDelete=(message)=>{
        console.log("0000",message)
    }

    return (

        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
            initialRouteName={"Welcome"}
        >
            <Stack.Screen
                name="Welcome"
                component={Welcome}
            />
            <Stack.Screen
                name="Login"
                component={Login}
            />
            <Stack.Screen
                name="Signup"
                component={Signup}

            />

            <Stack.Screen
                name="Inbox"
                component={TabNavigation}

            />
            <Stack.Screen
                name="NewMail"
                component={NewMail}
                options={{
                    headerShown: true,
                    title: "New Mail",
                    headerTintColor: "white",
                    headerStyle: { backgroundColor: COLORS.primary }

                }}

            />
            <Stack.Screen
                name="MailBody"
                component={MailBody}
                options={({ route }) => ({
                    headerShown: true,
                    title: '',
                    headerTintColor: "white",
                    headerStyle: { backgroundColor: COLORS.primary },
                    headerRight: ({ item }) => (
                        <MailOptions route={route} />
                    ),
                })}
            />

            <Stack.Screen
                name="Search"
                component={Search}

            />
            <Stack.Screen
                name="LandingScreen"
                component={LandingScreen}
            />
            <Stack.Screen
                name="Mail"
                component={Mail}
            />



        </Stack.Navigator>
    );
};

const styles = StyleSheet.create({

});

export default MainStackNavigator;