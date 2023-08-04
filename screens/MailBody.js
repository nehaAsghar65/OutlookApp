import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import { Card, IconButton, Avatar, Caption, Button, Searchbar, Portal } from 'react-native-paper';
import { COLORS, FONTS, SIZES,icons } from '../constants';
const MailBody = ({ route }) => {
    const { item } = route.params
    // console.log(item)
    return (
        <View style={styles.mainContainer}>

            <ScrollView style={styles.scrollView}>
                <Text style={styles.title}>{item.title}</Text>

                <Card.Title
                    title={item.name}
                    style={styles.cardTitle}
                    titleStyle={{color:'white'}}
                    subtitleStyle={{ color: 'white' }}
                    subtitle="to me"
                    left={() => <Avatar.Text size={40} label='label' style={{ marginRight: 4 }} />}
                    right={() => (
                        <View style={{ padding: 0, margin: 0 }}>
                            <IconButton icon="reply" onPress={() => { }} />
                            <Caption style={{ marginTop: 0, paddingTop: 0, color: 'white' }}>text abc</Caption>
                        </View>
                    )}
                />
                <Card.Content style={{ paddingLeft: 0, paddingRight: 0 }}>
                    <Text style={{ color: 'white' }}>{item.subTitle}</Text>
                </Card.Content>
                <Card.Actions style={{ justifyContent: 'space-between', marginVertical: 25 ,padding:1}}>
                    <Button mode="outlined" icon={icons.reply} uppercase={false} style={styles.buttonList} onPress={() => { console.log('Pressed') }}>
                        Reply
                    </Button>
                    <Button mode="outlined" icon={icons.replyall}  uppercase={false} style={styles.buttonReplyAll} onPress={() => { console.log('Pressed') }}>
                        Reply All
                    </Button>
                    <Button mode="outlined" icon={icons.forward}  uppercase={false} style={styles.buttonList} onPress={() => { console.log('Pressed') }}>
                        Forward
                    </Button>
                </Card.Actions>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        width: '80%',
        lineHeight: 45,
        color: 'white',
        ...FONTS.h1,
        fontWeight: 'bold'
    },
    buttonList: {
        width:'20%',
        flex: 3,
        borderColor: 'gray',
        borderWidth: 1,
        marginHorizontal: 5
    },
    buttonReplyAll: {
        flex: 3,
        borderColor: 'gray',
        borderWidth: 1,
        marginHorizontal: 5,
        paddingHorizontal: 5
    },
    cardTitle: {
        marginTop: 0,
        marginLeft: 0,
        paddingLeft: 0,
        marginBottom: 4,
        // color: 'white',
        
    },
    mainContainer: {
        backgroundColor: 'black',
        height: '100%',
        paddingHorizontal: 20,
        paddingVertical: SIZES.padding
    },
    scrollView: {
        paddingTop: 0,
        paddingHorizontal: 12
    }
});

export default MailBody;
