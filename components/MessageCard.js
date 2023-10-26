//import liraries
import React, { useRef, useEffect, useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, ToastAndroid,Image,TouchableOpacity } from 'react-native';
import { COLORS, SIZES, FONTS, icons } from '../constants';
import { Card, Avatar, IconButton, Provider } from 'react-native-paper';
import moment from 'moment';
import {dummyData} from '../constants';
import RBSheet from "react-native-raw-bottom-sheet";
import AttachmentContainer from './AttachmentContainer'
import { useToast } from 'native-base';
import { useAppContext } from '../context/AppContext';

const MessageCard = ({ containerStyle, message ,thread}) => {
    const { reRender, setReRender } = useAppContext();
    const [showDetails, setShowDetails] = useState(false)
    const [formattedDate, setFormattedDate] = useState('');
    const [attachmentExist,setAttachmentExist]=useState(false)
    const refRBSheet = useRef();
    const toast =useToast()
    let inboxData = {
        messages: [
          thread
        ]
      };
    useEffect(() => {
        if (message) {
            const date = moment(message.dtm).format('llll');
            setFormattedDate(date);
        }
        if(message.attachments){
            setAttachmentExist(!attachmentExist)
        }
        
        
    }, [])
    const showToast = () => {
        toast.show({
            description: "Message Deleted",
            placement:'bottom',
            style:{width:400,height:50,borderRadius:10,justifyContent:'center'}
          })
      };
   const handleDelete=()=>{
    const updatedThreads = inboxData.messages.map((msg) => {
        if (msg.messages) {
          msg.messages = msg.messages.filter(
            (item) => item.message_id !== message.message_id
          );
        }
 
      });
      inboxData={ ...inboxData, threads: updatedThreads };
      refRBSheet.current.close();
      showToast()
      setReRender(!reRender);
   }
  
   
    return (
        <SafeAreaView style={{
            ...styles.container,
            ...containerStyle
        }}>
          

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
                        {dummyData.messageItems.map((item, index) => (
                            <TouchableOpacity
                                key={index}
                                style={styles.item}
                                onPress={() => {
                                    item.title==="Delete" ? handleDelete() : console.log('0')
                                }
                                            }
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
                {message.cc_recipient.length != 0 && <Provider><View style={{ flexDirection: 'row' }}>
                    <Text style={styles.date}>{formattedDate}</Text>
                </View></Provider>}
            </View>}
            
            {attachmentExist && <AttachmentContainer files={message.attachments}/>}
           

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
        marginBottom: 20,
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

export default MessageCard;
