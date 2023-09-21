//import liraries
import React, { useRef, useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native';
import { COLORS, SIZES, FONTS, icons } from '../constants';
import { Card, Avatar, IconButton, Caption, Provider } from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';
import moment from 'moment';
import { BottomSheet } from '../components';
import RBSheet from "react-native-raw-bottom-sheet";




const MessageCard = ({ containerStyle, message, onPress }) => {
    const [showDetails, setShowDetails] = useState(false)
    const [formattedDate, setFormattedDate] = useState('');
    const [showBottomSheet, setShowBottomSheet] = useState(false);
    const refRBSheet = useRef();
    const filterItems = [{
        title: "Report a concern",
        icon: icons.report
    },
    {
        title: "Marked as read",
        icon: icons.unread
    },
    {
        title: "Flag",
        icon: icons.flag
    },

    {
        title: "Reply",
        icon: icons.reply
    },
    {
        title: "Forward",
        icon: icons.forward
    },
    {
        title: "Forward as attachment",
        icon: icons.attachment
    },
    {
        title: "Print",
        icon: icons.mention
    },
    {
        title: "Delete",
        icon: icons.bin
    },]
    useEffect(() => {
        if (message.dtm) {
            const date = moment(message.dtm).format('llll');
            setFormattedDate(date);
        }
    }, [])
    return (
        <SafeAreaView style={{
            ...styles.container,
            ...containerStyle
        }}>
            {showBottomSheet && <BottomSheet showBottomSheet={showBottomSheet} onDismiss={() => { setShowBottomSheet(false) }} />}

            <View style={{ width: "100%", flexDirection: 'row' }}>
                <View style={{ width: "90%" }}>
                    <TouchableOpacity
                        onPress={() => setShowDetails(!showDetails)}>
                        <Card.Title

                            title={message.sender_name}
                            style={styles.cardTitle}
                            titleStyle={{ color: COLORS.gray, fontWeight: 'bold' }}
                            subtitleStyle={{ color: COLORS.gray, marginTop: -10 }}
                            subtitle={message.sender_email}

                            left={() => <Avatar.Text size={40} label={message.sender_name} style={{ marginRight: 4 }} />}

                        />
                    </TouchableOpacity>



                </View>
                <View style={{ alignItems: 'center', width: 30, height: 45 }}>
                    <IconButton icon={icons.dots} onPress={() => refRBSheet.current.open()} />

                </View>
                <RBSheet
                    ref={refRBSheet}
                    closeOnDragDown={true}
                    closeOnPressMask={true}

                    customStyles={{
                        container: {
                            borderTopRightRadius: 20,
                            borderTopLeftRadius: 20,
                            height: 350
                        },
                        draggableIcon: {
                            backgroundColor: COLORS.grey,
                        }
                    }}
                >
                    <View style={{ height: "90%" }}>
                        {filterItems.map((item, index) => (
                            <TouchableOpacity
                                key={index}
                                style={styles.item}
                                onPress={() => { }}
                            >

                                <Image
                                    style={{
                                        width: 25,
                                        height: 20,
                                        tintColor: COLORS.grey,
                                        marginRight: 10
                                    }}
                                    source={item.icon}
                                />

                                <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>{item.title}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </RBSheet>
            </View>


            {showDetails && <View style={styles.accordion}>
                {message.to_recipient.length != 0 && (
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.accordionHeading}>To</Text>
                        {message.to_recipient.map((recipient, index) => (
                            <View key={index} style={{ flexDirection: 'row' }}>
                                <Text style={styles.names}>{recipient.name}</Text>
                                <Text style={styles.email}>{recipient.email}</Text>
                            </View>
                        ))}
                    </View>)}

                {message.cc_recipient.length !== 0 && <View style={{ flexDirection: 'column' }}>
                    <Text style={styles.accordionHeading}>Cc</Text>
                    {message.cc_recipient.map((recipient, index) => (
                        <View key={index} style={{ flexDirection: 'row' }}>
                            <Text style={styles.names}>{recipient.name}</Text>
                            <Text style={styles.email}>{recipient.email}</Text>

                        </View>
                    ))}
                </View>}
                {message.cc_recipient.lenght != 0 && <Provider><View style={{ flexDirection: 'row' }}>
                    <Text style={styles.date}>{formattedDate}</Text>
                </View></Provider>}
            </View>}

            <Card.Content>
                <Text style={{ color: COLORS.gray }}>{message.body}</Text>
            </Card.Content>



        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container: {
        elevation: 5,
        flexDirection: 'column',
        alignItems: 'center',
        height: 'auto',
        marginTop: 20,
        paddingBottom: 20,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.light,

    },
    item: {
        flexDirection: "row",
        width: "100%",
        height: 20,
        paddingHorizontal: 20,
        marginTop: 18
    },
    cardTitle: {
        paddingHorizontal: 5,
        flexDirection: 'row'


    },
    accordion: {
        paddingBottom: SIZES.base,
        paddingHorizontal: SIZES.padding,
        width: '100%',
        borderBottomWidth: 0.25,
        borderBottomColor: COLORS.gray,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15
    },
    accordionHeading: {
        ...FONTS.h4,
        color: COLORS.dark,
        // fontWeight:'600'
    },
    names: {

        left: 5,
        ...FONTS.h4,
        // fontWeight:'bold',
        color: COLORS.primary,
    },
    email: {
        left: 10,
        ...FONTS.h5,
        color: COLORS.grey,
    },

    date: {
        left: 20,
        ...FONTS.body4,
        color: COLORS.grey,
    }

});

//make this component available to the app
export default MessageCard;
