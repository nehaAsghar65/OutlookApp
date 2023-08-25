import React from 'react';
import { View, Text, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import { Card, IconButton, Avatar, Caption, Button, Searchbar, Portal } from 'react-native-paper';
import { COLORS, FONTS, SIZES, icons } from '../constants';
import { ReplyFooter } from '../components';
const MailBody = ({ route }) => {
    const { item } = route.params
    // console.log(item)
    return (
        <SafeAreaView  style={{ flex: 1, paddingVertical: SIZES.base, backgroundColor: COLORS.light }}>

            <ScrollView style={styles.scrollView}>
                <Text style={styles.title}>{item.title}</Text>

                <Card.Title
                    title={item.name}
                    style={styles.cardTitle}
                    titleStyle={{ color: COLORS.gray }}
                    subtitleStyle={{ color: COLORS.gray }}
                    subtitle="to me"
                    left={() => <Avatar.Text size={40} label='label' style={{ marginRight: 4 }} />}
                    right={() => (
                        <View style={{ padding: 0, margin: 0 }}>
                            <IconButton icon="reply" onPress={() => { }} />
                            <Caption style={{ marginTop: 0, paddingTop: 0, color: COLORS.gray }}>text abc</Caption>
                        </View>
                    )}
                />
                <Card.Content style={{ paddingLeft: 0, paddingRight: 0 }}>
                    <Text style={{ color: COLORS.gray }}>{item.subTitle}</Text>
                </Card.Content>
                
            </ScrollView>
           <ReplyFooter/>
        </SafeAreaView>
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
    footer:{
         position: 'absolute',
         left: 0, 
         right: 0, 
         bottom: 0 ,
         width:'100%',
         height:'30%',
        backgroundColor:COLORS.light,
        borderTopColor:'black',
        // borderTopWidth:'100%'

    },
    
    cardTitle: {
        marginTop: 0,
        marginLeft: 0,
        paddingLeft: 0,
        marginBottom: 4,
        // color: 'white',

    },
    mainContainer: {
        backgroundColor: COLORS.light,
        height: '100%',
        flex:1,
    },
    scrollView: {
        paddingTop: 0,
        paddingHorizontal: 22
    }
});

export default MailBody;
