//import liraries
import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Apps, Calender, Feed, Home, Inbox, Mail } from '../screens';
import { COLORS, FONTS, SIZES, icons } from '../constants';
import { PickerList, TabIcon, TextButton } from '../components';
import { useNavigation } from '@react-navigation/native';



const Tab = createBottomTabNavigator();

const TabNavigation = () => {

    const [focused, setFocused] = useState(false)
    const [others, setOthers] = useState(false)
    const [selectedOption, setSelectedOption] = useState(false)
    const [showPicker, setShowPicker] = useState(false);
    const [filterStatus, setFilterStatus] = useState("Filter")
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
                backgroundColor: 'black',
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
