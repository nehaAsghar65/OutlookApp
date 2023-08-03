import 'react-native-gesture-handler';
import React, { useState } from "react";
import { Image, View, Text, TouchableOpacity } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home, LandingScreen, NewMail, MailBody, Login, Signup, Welcome, Mail, Calender, Apps, Feed } from './screens'
import CustomDrawer from "./navigation/CustomDrawer";
import TabNavigation from './navigation/TabNavigation';
import { IconButton, PickerList } from './components';
import { icons, COLORS, FONTS, SIZES } from './constants';
// import dummyData from './constants';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const App = () => {
    const [showPicker, setShowPicker] = useState(false);
    const [filterStatus,setFilterStatus]=useState("")

    return (
        <NavigationContainer >

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
                <Stack.Screen
                    name="CustomDrawer"
                    component={CustomDrawer}
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
                        headerStyle: { backgroundColor: "black" }

                    }}

                />
                <Stack.Screen
                    name="MailBody"
                    component={MailBody}
                    options={{
                        headerShown: true,
                        title: "",
                        headerTintColor: "white",
                        headerStyle: { backgroundColor: "black" },
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
                                    {showPicker&& <PickerList showList={showPicker} setShowList={setShowPicker}  filterStatus={filterStatus} setFilterStatus={setFilterStatus}/>}

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


        </NavigationContainer>
    )
}

export default App