import 'react-native-gesture-handler';
import React, { useState, useEffect } from "react";
import { Image, View, Text, TouchableOpacity, Alert,StyleSheet } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { Home, LandingScreen, NewMail, MailBody, Login, Signup, Welcome, Mail, Calender, Apps, Feed, Search } from '../screens';
import CustomDrawer from "./CustomDrawer";
import TabNavigation from './TabNavigation';
import { IconButton, PickerList } from '../components';
import { icons, COLORS, FONTS, SIZES } from '../constants';



const Stack = createStackNavigator();
const MainStackNavigator = () => {
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
                <Stack.Screen
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
                />


            </Stack.Navigator>
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
export default MainStackNavigator;
