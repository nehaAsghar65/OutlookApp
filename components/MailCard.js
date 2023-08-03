
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SIZES, COLORS, FONTS, icons, images } from '../constants';
const MailCard = ({ containerStyle, mailItem, onPress }) => {
    // console.log("mail item------",mailItem)
    return (
        <TouchableOpacity
            style={{
                ...styles.container,
                ...containerStyle,
            }}
            onPress={onPress}
        >
            {/* image */}
            <Image
                source={images.logo}
                resizeMode='cover'
                style={styles.imageContainer}
            />
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
                <View style={{justifyContent:'space-between',flexDirection:'row', }}>
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
                        }} />
                </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
        marginTop: 20,
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
        // paddingTop:"1%",
        textAlign: 'left',
        color: "white",
        fontWeight: 'bold',
    },
    subDetail: {
        // paddingHorizontal: 10,
        width: "90%",
        flexDirection: 'column',
        alignItems:'flex-start',
    },
    subTitle: {

        color: 'white',
        // marginRight: 90,
    },
});


export default MailCard;
