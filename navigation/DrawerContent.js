//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { COLORS, FONTS, SIZES, icons, images } from '../constants';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Avatar, Caption, IconButton, Title } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();

// create a component
const DrawerContent = (props) => {
    // console.log(props)
    return (
        <View style={{ flex: 1, flexDirection: 'row' }}>

            <View style={styles.leftDrawerSection}>
                <View style={{marginTop:25}}>
                    <Image
                    style={{backgroundColor:null,width:45,height:45}}
                    source={images.logo}

                    />
                </View>
                <View>
                <TouchableOpacity>
                    <Image style={styles.iconStyle}
                        source={icons.help} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.iconStyle}
                        source={icons.home} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={styles.iconStyle}
                        source={icons.setting} />
                </TouchableOpacity>
                </View>

            </View>
            <DrawerContentScrollView {...props}>
                <View style={styles.DrawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: 'row', marginTop: 15, borderBottomColor: COLORS.gray, borderBottomWidth: 0.25 }}>

                            <View style={{ marginLeft: 5, flexDirection: 'column', marginTop: 5 }}>
                                <Title style={styles.title}>Username here</Title>
                                <Caption style={styles.caption}>some caption here</Caption>
                            </View>
                        </View>
                        <View style={styles.row}>
                            <Text style={{ marginLeft: 15, ...FONTS.h3, fontWeight: 'bold' }}>Folders</Text>
                            <DrawerItem
                                icon={() => (
                                    <Image source={icons.email}
                                        style={{ width: 25, height: 25 }}
                                    />
                                )}
                                label="Inbox"

                            />
                            <DrawerItem
                                icon={() => (
                                    <Image source={icons.email}
                                        style={{ width: 25, height: 25 }}
                                    />
                                )}
                                label="Drafts" />
                            <DrawerItem
                                icon={() => (
                                    <Image source={icons.archive}
                                        style={{ width: 25, height: 25, tintColor: COLORS.grey }}
                                    />
                                )}
                                label="Archive" />
                            <DrawerItem
                                icon={() => (
                                    <Image source={icons.email}
                                        style={{ width: 25, height: 25 }}
                                    />
                                )}
                                label="Sent" />
                            <DrawerItem icon={() => (
                                <Image source={icons.person}
                                    style={{ width: 25, height: 25 }}
                                />
                            )}
                                label="Groups" />
                            <DrawerItem icon={() => (
                                <Image source={icons.email}
                                    style={{ width: 25, height: 25 }}
                                />
                            )}
                                label="Deleted" />
                            <DrawerItem icon={() => (
                                <Image source={icons.bin}
                                    style={{ width: 25, height: 25, tintColor: COLORS.grey }}
                                />
                            )}
                                label="Junk" />
                            <DrawerItem icon={() => (
                                <Image source={icons.email}
                                    style={{ width: 25, height: 25 }}
                                />
                            )}
                                label="Conversation History" />
                        </View>
                    </View>
                </View>
            </DrawerContentScrollView>

        </View>
    );
};


const styles = StyleSheet.create({
    DrawerContent: {
        flex: 1,

    },
    iconStyle: {
        marginVertical: SIZES.base,
        marginRight: SIZES.base,
        tintColor: COLORS.grey,
        width: 25,
        height: 25

    },
    row: {
        marginTop: 20,
        // flexDirection: 'row',
        // alignItems: 'center

    },
    title: {
        ...FONTS.h3,
        marginTop: 3,
        fontWeight: 'bold'
    },
    caption: {
        ...FONTS.h5,
        lineHeight: 14
    },
    userInfoSection: {
        paddingLeft: 5

    },
    leftDrawerSection: {
        flexDirection:'column',
        
        backgroundColor: COLORS.lightGrey,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: "100%",
        width: "25%",
        marginBottom: 5,

    },
});


export default DrawerContent;
