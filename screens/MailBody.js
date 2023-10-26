import React, { useEffect, useState } from 'react';
import { View, StyleSheet, SafeAreaView, Text } from 'react-native';
import { COLORS, FONTS, SIZES, icons, dummyData } from '../constants';
import { MessageCard, ReplyFooter, PickerList, IconButton } from '../components';
import { useNavigation } from '@react-navigation/native';
import { FlatList } from 'react-native-gesture-handler';
import { useAppContext } from '../context/AppContext';



const MailBody = ({ route }) => {
    // const [reRenderFlag, setReRenderFlag] = useState(false)
    const navigation = useNavigation()
    const { allthreads, thread, item } = route.params
    const { reRender } = useAppContext();
    // useEffect(() => {
    //     // Check if there are no messages and set the reRenderFlag accordingly
    //     if (item.messages.length === 0) {
    //         return <Text>no msg to show</Text>

    //     }
    // }, []);
    // if (item.messages.length === 0) {
    //     return <Text>No msg to show</Text>
    // }
    return (
        <View style={{ flex: 1, backgroundColor: COLORS.lightGrey }}>
            <Text style={{ fontSize: 0 }}>{reRender}</Text>
            <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightGrey, marginBottom: 50 }}>
                {reRender || item.messages.length !== 0 ? (<FlatList
                    data={item.messages}
                    keyboardDismissMode='on-drag'
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => `${item.message_id}`}
                    renderItem={({ item }) => (

                        <MessageCard
                            key={item.message_id}
                            containerStyle={{
                                marginHorizontal: SIZES.base
                            }}
                            message={item}
                            thread={thread}

                        />


                    )}

                />) : (

                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ ...FONTS.h2 }}>No message to show</Text>
                    </View>
                )}



            </SafeAreaView>

            <ReplyFooter />
        </View >
    );
}

const styles = StyleSheet.create({
    title: {
        width: '80%',
        lineHeight: 45,
        color: COLORS.gray,
        ...FONTS.h1,
        fontWeight: 'bold'
    },
    footer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        width: '100%',
        height: '30%',
        backgroundColor: COLORS.light,
        borderTopColor: COLORS.gray,

    },


    scrollView: {
        paddingTop: 0,
        paddingHorizontal: 22
    }
});

export default MailBody;
