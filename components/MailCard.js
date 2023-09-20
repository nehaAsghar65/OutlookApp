
import React, { Component, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SIZES, COLORS, FONTS, icons, images } from '../constants';
import moment from 'moment'
import { colors } from '../constants';
const MailCard = ({ containerStyle, mailItem, onPress }) => {
    const [initials, setInitials] = useState('')
    const [initialsExist, setInitialsExist] = useState(false)
    const [formattedDate, setFormattedDate] = useState('');



    useEffect(() => {
        if (mailItem.participants.length != 0) {
            setInitialsExist(true)
            const nameParts = mailItem.participants[0].name.split(' ')
            const firstNameInitial = nameParts[0].charAt(0)
            const lastNameInitial = nameParts[1] ? nameParts[1].charAt(0) : ''
            setInitials(`${firstNameInitial}${lastNameInitial}`)
        }
        if (mailItem.messages[0].dtm) {
            const date = moment(mailItem.messages[0].dtm).format('MMM Do');
            setFormattedDate(date);
        }
    }, [])

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
                marginLeft: 5,
                width: 50,
                height: 50,
                borderRadius: 70 / 2,
                backgroundColor: colors.carolinaBlue
            }}>
                {initials && <Text style={styles.initials}>{initials}</Text>}
            </View>

            {/* Details */}
            <View style={styles.titleContainer}>

                <View style={{
                    flexDirection: "row", justifyContent: 'space-between'


                }}>
                    {initialsExist ? (<Text
                        ellipsizeMode='tail' numberOfLines={1}
                        style={{

                            ...FONTS.body3,
                            ...styles.title
                        }}
                    >{mailItem.participants[0].name}
                    </Text>) : (<Text style={{

                        ...FONTS.body3,
                        ...styles.title
                    }}>No Recipient</Text>)}


                    <Text style={{

                        ...FONTS.body5,
                        ...styles.date
                    }}>
                        {formattedDate}
                    </Text>

                </View>

                {/* Additional details */}
                <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
                    <View style={styles.subDetail}>
                        <Text
                            ellipsizeMode='tail' numberOfLines={1}
                            style={{
                                fontWeight: 'bold',
                                ...FONTS.body5,
                                ...styles.subTitle

                            }}
                        >
                            {mailItem.messages[0].subject}
                        </Text>
                        <Text
                            ellipsizeMode='tail' numberOfLines={1}
                            style={{

                                ...FONTS.body5,
                                ...styles.subTitle

                            }}
                        >
                            {mailItem.messages[0].body.replace(/(\r\n|\n|\r)/gm, "")}
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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        height: 55,
        marginVertical: 7,
        borderRadius: SIZES.radius,
        backgroundColor: null,

    },
    imageContainer: {
        width: 30,
        height: 30,
        borderRadius: SIZES.radius,
    },
    titleContainer: {

        width: '95%', paddingHorizontal: 10, justifyContent: 'space-between'
    },
    date: {
        // marginBottom: 3,
        // textAlign: 'right',
        marginLeft: 0,
        color: COLORS.gray,
        fontWeight: 'bold',
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
    initials: {
        color: COLORS.light,
        ...FONTS.body2,
        textAlign: 'center',
        marginTop: 10
        // alignItems:'center',
        // justifyContent:'center'
    }
});


export default MailCard;
