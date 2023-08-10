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
                    headerShown: true,
                    headerStyle: {
                        height: 90,
                        backgroundColor: COLORS.primary,

                    },

                    headerTitle: () => (<View >
                        <Text style={{ marginLeft: 7, fontSize: 21, fontWeight: "bold", color: COLORS.light }}>Inbox</Text>
                        <View style={{
                            marginTop: 20,
                            flexDirection: "row",
                            justifyContent: 'space-between',
                        }}>
                            <TextButton
                                label="Focused"
                                focused={focused}
                                contentContainerStyle={{
                                    height: 25,
                                    width: 60,
                                    borderRadius: SIZES.radius,
                                    backgroundColor: focused ? COLORS.grey20 : null,
                                }}
                                labelStyle={{
                                    ...FONTS.h5
                                }}
                                onPress={() => {
                                    setFocused(!focused)
                                    setOthers(false)
                                }}
                            />
                            <TextButton
                                label="Others"
                                focused={others}
                                contentContainerStyle={{
                                    height: 25,
                                    width: 50,
                                    borderRadius: SIZES.radius,
                                    marginLeft: SIZES.base,
                                    backgroundColor: others ? COLORS.grey20 : null,

                                }}
                                labelStyle={{
                                    // color: COLORS.dark,
                                    ...FONTS.h5
                                }}
                                onPress={() => {
                                    setOthers(!others)
                                    setFocused(false)
                                }}
                            />


                        </View>

                    </View>),
                    headerRight: () => (
                        <View style={{ marginRight: 20 }}>
                            <TouchableOpacity style={{ justifyContent: 'flex-end', paddingHorizontal: 30, paddingBottom: 8, flexDirection: 'row' }}
                                onPress={() => { navigation.navigate('Search') }}>
                                <Image
                                    source={icons.search}
                                    style={{ height: 20, width: 20 }} />
                            </TouchableOpacity>
                            <TextButton
                                label={filterStatus}
                                contentContainerStyle={{
                                    marginTop: 20,
                                    height: 25,
                                    width: "auto",
                                    borderRadius: SIZES.radius,
                                    paddingHorizontal: 10,
                                    backgroundColor: COLORS.grey20,

                                }}
                                labelStyle={{
                                    ...FONTS.h5
                                }}
                                onPress={() => setShowPicker(!showPicker)}
                            />
                            {showPicker && <PickerList showList={showPicker} setShowList={setShowPicker} filterStatus={filterStatus} setFilterStatus={setFilterStatus} />}

                        </View>
                    ),

                    tabBarIcon: ({ focused }) => <TabIcon focused={focused}
                        icon={icons.email} />
                }} />

            <Tab.Screen name='Calender' component={Calender} options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => <TabIcon  focused={focused}
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
