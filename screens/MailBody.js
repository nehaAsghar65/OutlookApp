import React from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import { COLORS, FONTS, SIZES, icons } from '../constants';
import { MessageCard, ReplyFooter } from '../components';
import { FlatList } from 'react-native-gesture-handler';
const MailBody = ({ route }) => {
    const { item } = route.params
    return (
        <ScrollView style={{flex: 1, backgroundColor: COLORS.lightGrey,height:'100%' }}>

            <FlatList
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
                        message={item} />
                )}
            />
            <ReplyFooter />
        </ScrollView>
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
        borderTopColor: 'black',

    },

   
    scrollView: {
        paddingTop: 0,
        paddingHorizontal: 22
    }
});

export default MailBody;
