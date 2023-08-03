import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { COLORS, FONTS, SIZES } from '../constants';
import dummyData from '../constants';
import icons from '../constants/icons';
import IconButton from './IconButton';
const PickerList = ({ showList, setShowList,filterStatus,setFilterStatus }) => {
    // const [selectedValue, setSelectedValue] = useState("All messages");
    const filterItems = [{
        title: "All messages",
        icon: icons.email
    },
    {
        title: "Unread",
        icon: icons.unread
    },
    {
        title: "Flagged",
        icon: icons.flag
    },

    {
        title: "Pinned",
        icon: icons.pinned
    },
    {
        title: "To me",
        icon: icons.unread
    }  ,
    {
        title: "Has attachments",
        icon: icons.attachment
    },
    {
        title: "Mentions me",
        icon: icons.mention
    }]

    // console.log(filterItems)
    return (
        <View style={styles.container}>
            <FlatList
                data={filterItems}
                renderItem={({ item, index }) => {
                    return (

                        <TouchableOpacity style={styles.item}
                            onPress={() => {
                                setShowList(!showList)
                                setFilterStatus(item.title)
                            }}>
                            <Image
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: "white",
                                    marginRight: 10
                                }}
                                source={item.icon} />

                            <Text style={{ color: "white", ...FONTS.body4 }}>{item.title}</Text>
                        </TouchableOpacity>
                    )
                }}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        width: 170,
        height: "140%",
        borderRadius: SIZES.radius,
        marginTop: "30%",
        backgroundColor: COLORS.gray,
        alignSelf: "center"
    },
    item: {
        flexDirection: "row",
        width: "100%",
        height: 20,
        paddingHorizontal: 15,
        marginTop: 15
    }
});


export default PickerList;
