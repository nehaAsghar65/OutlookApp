import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image ,SafeAreaView} from 'react-native';
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
        <SafeAreaView style={styles.container}>
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
                                    tintColor: COLORS.gray,
                                    marginRight: 10
                                }}
                                source={item.icon} />

                            <Text style={{ color: COLORS.gray, ...FONTS.body4 }}>{item.title}</Text>
                        </TouchableOpacity>
                    )
                }}
            />
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    container: {
        
        width: 170,
        height: 270,
        position:'absolute',
        marginTop: 80,
        marginRight:200,
        backgroundColor: COLORS.light,
        shadowOffset: {
            width: "100%",
            height: "100%",
        },
        shadowOpacity: 40.53,
        shadowRadius: 90.97,

        elevation: 10,
        shadowColor:'black'
    },
    item: {
        flexDirection: "row",
        width: "100%",
        height: 20,
        paddingHorizontal: 15,
        marginTop: 15
    },
    
});


export default PickerList;
