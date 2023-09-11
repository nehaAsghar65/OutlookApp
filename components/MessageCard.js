//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet,SafeAreaView } from 'react-native';
import { COLORS ,SIZES, icons} from '../constants';
import { Card ,Avatar, IconButton, Caption} from 'react-native-paper';
import { TouchableOpacity } from 'react-native-gesture-handler';

// create a component
const MessageCard = ({ containerStyle, message, onPress }) => {
    
    return (
        <SafeAreaView style={{...styles.container,
            ...containerStyle}}>
            <Card.Title
                    title={message.sender_name}
                    style={styles.cardTitle}
                    titleStyle={{ color: COLORS.gray }}
                    subtitleStyle={{ color: COLORS.gray ,marginTop:-10}}
                    subtitle={message.sender_email}
                    left={() => <Avatar.Text size={40} label={message.sender_name} style={{ marginRight: 4 }} />}
                    right={() => (
                        <View style={{alignItems:'center'}}>
                            <IconButton icon={icons.reply} onPress={() => { }} />
                            <Caption style={{ marginTop: -8, paddingTop: 0, color: COLORS.gray }}>reply</Caption>
                        </View>
                    )}
                    
                />
                 <Card.Content>
                    <Text style={{ color: COLORS.gray }}>{message.body}</Text>
                    </Card.Content>
                
                
        </SafeAreaView>
    );
};


const styles = StyleSheet.create({
    container: {
        elevation:5,
    flexDirection: 'column',
    alignItems: 'center',
    height: 'auto',
    marginTop: 20,
    paddingBottom:20,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.light,

    },
    
    cardTitle: {
        // marginTop: -6,
        paddingHorizontal:5,
        // marginBottom: 110,

    },
    
});

//make this component available to the app
export default MessageCard;
