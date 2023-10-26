import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Image ,TouchableOpacity} from 'react-native';
import { IconButton, TextInput } from 'react-native-paper';
import { COLORS, SIZES, FONTS, icons } from '../constants';
import { useNavigation } from '@react-navigation/native';
import { MailAttachments } from '../components';

const MyComponent = () => {
    const navigation = useNavigation()
    const [isOpen, setIsOpen] = useState(true)
    const [dataFromChild, setDataFromChild] = useState([]);
    const [composeDetails, setComposeDetails] = useState({
        sender: 'mycontact@gmail.com',
        receiver: '',
        subject: '',
        body: ''
    });
    const onDataReceived = (data) => {
        setDataFromChild(data);
        console.log('-----', data)

    }

    const handleChange = (name, value) => {
        setComposeDetails((prevDetails) => ({
            ...prevDetails,
            [name]: value
        }));
    };
    useEffect(() => {
        navigation.setOptions({
            headerTitle: () => (<View><Text style={{ color: 'white', fontSize: 18, fontWeight: "bold" }}>New Message</Text>
                <Text style={{ color: 'white', ...FONTS.body5 }}>{composeDetails.sender}</Text></View>),
            //   headerRight: () => <Text style={{color:'white'}}>text</Text>
        })

    }, [navigation])

    return (
        <SafeAreaView style={{ backgroundColor: '#fff', height: '100%' }}>


            <TextInput style={styles.textInput}
            
                label={'To'}
                value={composeDetails.receiver}
                onChangeText={(receiver) => { setComposeDetails({ receiver }) }}
                right={<TextInput.Icon name="chevron-down" />}
            />
            <TextInput style={styles.textInput}
            autoCapitalize='characters'
                label={'Subject'}
                value={composeDetails.subject}
                onChangeText={(subject) => { setComposeDetails({ subject }) }}
            />
           { dataFromChild.length>0 && <View style={styles.attachmentContainer}>
                {dataFromChild.map((file, index) => (
                    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                    <Text
                    
                        key={index.toString()}
                        style={{paddingBottom:8}}
                        numberOfLines={1}
                        ellipsizeMode={'middle'}>
                        {file?.name}
                    </Text>
                    <TouchableOpacity
                    ><Image
                     style={styles.icon}
                     source={icons.verticleDots}
                 /></TouchableOpacity>
                     
                 </View>
                ))}
            </View>}
            <TextInput style={styles.inputBody}
            numberOfLines={50}
            maxLength={200}
               borderBottomColor={null}
                value={composeDetails.body}
                onChangeText={(body) => { setComposeDetails({ body }) }}
                multiline={true}
            />

            
            <MailAttachments onDataReceived={onDataReceived} />

        </SafeAreaView>

    );
};

const styles = {
    icon:{
        height:22,
        width:22,
        tintColor:COLORS.grey
    },
    textInput: {
        backgroundColor: COLORS.light,
        fontSize: 16,
        width: '100%',
        // paddingLeft: 10
    },
    textInputAffix: { marginRight: 15, ...FONTS.h3, color: COLORS.gray },
    inputBody: { backgroundColor: COLORS.light, ...FONTS.h3 },
    uri:{
        
    },
    attachmentContainer:{
        borderBottomColor: COLORS.gray,
        borderBottomWidth: 1, 
        borderBottomEndRadius: 0, 
        borderBottomLeftRadius:0, 
        borderBottomEndRadius:0, 
        height: 'auto',
        marginTop: 8,
        justifyContent:'center',
        paddingHorizontal:18
    }



};

export default MyComponent;
