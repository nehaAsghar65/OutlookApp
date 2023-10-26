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
const TabNavigation = () => {

    const navigation = useNavigation()
    return (

        <Tab.Navigator screenOptions={{
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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },

});

export default TabNavigation;

