
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SIZES, COLORS, FONTS, icons, images } from '../constants';
import {colors} from '../constants';
const MailCard = ({ containerStyle, mailItem, onPress }) => {
  
    
    
    const [randColor, setRandColor]=useState('')
    const nameParts = mailItem.name.split(' ');
    const firstNameInitial = nameParts[0].charAt(0);
    const lastNameInitial = nameParts[1] ? nameParts[1].charAt(0) : '';
    const initials = `${firstNameInitial}${lastNameInitial}`;
    useEffect(()=>{
        const randomIndex = Math.floor(Math.random() * colors.length);
        const selectedColor = colors[randomIndex];
        setRandColor(selectedColor)
        // console.log(randColor)
        
    },[])
    // console.log("mail item------", colors)
    return (
        <TouchableOpacity
            style={{
                ...styles.container,
                ...containerStyle,
            }}
            onPress={onPress}
        >
            {/* image */}
            <View style={{
                marginLeft:5,
                width: 50,
                height: 50,
                borderRadius: 70 / 2,
                backgroundColor: colors.carolinaBlue
            }}>
                <Text style={styles.initials}>{initials}</Text>
            </View>
            {/* <Image
                source={images.logo}
                resizeMode='cover'
                style={styles.imageContainer}
            /> */}
            {/* Details */}
            <View style={styles.titleContainer}>

                <View style={{
                    justifyContent: 'space-between', flexDirection: "row",
                }}>
                    <Text
                        ellipsizeMode='tail' numberOfLines={1}
                        style={{

                            ...FONTS.body3,
                            ...styles.title
                        }}
                    >
                        {mailItem.name}
                    </Text>
                    <Text style={{

                        ...FONTS.body5,
                        ...styles.title
                    }}>
                        {mailItem.time}
                    </Text>

                </View>

                {/* Additional details */}
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', }}>
                    <View style={styles.subDetail}>
                        <Text
                            ellipsizeMode='tail' numberOfLines={1}
                            style={{
                                fontWeight: 'bold',
                                ...FONTS.body5,
                                ...styles.subTitle

                            }}
                        >
                            {mailItem.title}
                        </Text>
                        <Text
                            ellipsizeMode='tail' numberOfLines={1}
                            style={{

                                ...FONTS.body5,
                                ...styles.subTitle

                            }}
                        >
                            {mailItem.subTitle}
                        </Text>
                    </View>
                    <TouchableOpacity
                    >

                        <Image
                            source={icons.favourite}
                            style={{
                                width: 20,
                                height: 20,
                                tintColor: COLORS.gray
                            }} />
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    container: {
        borderBottomColor: COLORS.grey,
        borderBottomWidth: 0.5,
        borderBottomEndRadius: 3,
        // marginTop:90,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
        height: 55,
        // marginBottom:20,
        marginVertical: 7,
        // paddingVertical:10,
        borderRadius: SIZES.radius,
        backgroundColor: null,

    },
    imageContainer: {
        width: 30,
        height: 30,
        borderRadius: SIZES.radius,
    },
    titleContainer: {

        width: '95%', paddingHorizontal: 10,
    },
    title: {
        marginBottom: 3,
        textAlign: 'left',
        color: COLORS.gray,
        fontWeight: 'bold',
    },
    subDetail: {
        // paddingVertical: 1,
        width: "90%",
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    subTitle: {
        marginTop: -5,
        color: COLORS.gray,
        // marginRight: 90,
    },
    initials:{
        color:COLORS.light,
        ...FONTS.body2,
        textAlign:'center',
        marginTop:10
        // alignItems:'center',
        // justifyContent:'center'
    }
});


export default MailCard;
