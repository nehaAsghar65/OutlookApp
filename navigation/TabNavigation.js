//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Inbox,Home, LandingScreen, NewMail, MailBody, Login, Signup, Welcome, Mail, Calender, Apps, Feed, Search } from '../screens';
import { COLORS, FONTS, SIZES, icons } from '../constants';
import { PickerList, TabIcon, TextButton } from '../components';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";
import MainStackNavigator from './MainStackNavigator';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const HomeStack = () => {
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
            name="Home"
            component={Home}
        />
        {/* <Stack.Screen
            name="CustomDrawer"
            component={CustomDrawer}
        /> */}
        <Stack.Screen
            name="Inbox"
            component={Inbox}
            
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
            options={{
                headerShown: true,
                title: "",
                headerTintColor: "white",
                headerStyle: { backgroundColor:COLORS.primary },
                headerRight: () => (

                    <View style={{ flexDirection: 'row' }}>
                        <Image
                            source={icons.archive}
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: 'white',
                                marginRight: 20
                            }}
                        />
                        <Image
                            source={icons.bin}
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: 'white',
                                marginRight: 20
                            }}
                        />

                        <Image
                            source={icons.email}
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: 'white',
                                marginRight: 20
                            }}
                        />
                        <TouchableOpacity
                            onPress={() => setShowPicker(!showPicker)}
                        >
                            {/* {showPicker && <PickerList />} */}
                            {showPicker && <PickerList showList={showPicker} setShowList={setShowPicker} filterStatus={filterStatus} setFilterStatus={setFilterStatus} />}

                            <Image
                                source={icons.dots}
                                style={{
                                    width: 20,
                                    height: 20,
                                    tintColor: 'white',
                                    marginRight: 20
                                }}

                            />
                        </TouchableOpacity>

                    </View>

                ),

            }}
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
        {/* <Stack.Screen
            name="Calender"
            component={Calender}
        />

        <Stack.Screen
            name="Apps"
            component={Apps}
        />
        <Stack.Screen
            name="Feed"
            component={Feed}
        /> */}


    </Stack.Navigator>
    )
}
const TabNavigation = () => {

    const navigation = useNavigation()
    return (

        <Tab.Navigator tabBarOptions={{
            showLabel: false,
            style: {
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                elevation: 0,
                // backgroundColor: 'black',
                // borderTopColor: "transparent",
                height: 100
            }
        }}>
            <Tab.Screen name='Inbox' component={Inbox}
                options={{
                    headerShown: false,
                    tabBarIcon: ({ focused }) => <TabIcon focused={focused}
                        icon={icons.email} />
                }} />

            <Tab.Screen name='Calender' component={Calender} options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => <TabIcon focused={focused}
                    icon={icons.calender} />
            }} />
            <Tab.Screen name='Feed' component={Feed} options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => <TabIcon focused={focused}
                    icon={icons.feed} />
            }} />
            <Tab.Screen name='Apps' component={Apps} options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => <TabIcon focused={focused}
                    icon={icons.apps} />
            }} />
        </Tab.Navigator>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },

});

//make this component available to the app
export default TabNavigation;
