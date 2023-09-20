import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, StyleSheet, Input } from 'react-native';
import { TextInput } from 'react-native-paper';
import { COLORS, SIZES, FONTS } from '../constants';
import { useNavigation } from '@react-navigation/native';
import { MailAttachments } from '../components';
const MyComponent = () => {
    const navigation = useNavigation()
    const [isOpen, setIsOpen] = useState(true)
    const [composeDetails, setComposeDetails] = useState({
        sender: 'mycontact@gmail.com',
        receiver: '',
        subject: '',
        body: ''
    });

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
        <SafeAreaView style={{ backgroundColor: '#fff', height: '100%', paddingHorizontal: SIZES.padding }}>


            <TextInput style={styles.textInput}
             label={'From'}
                value={composeDetails.sender}
                onChangeText={(sender) => { setComposeDetails({ sender }) }}
                // left={<TextInput.Affix textStyle={styles.textInputAffix} text="From" />}
                right={<TextInput.Icon name="chevron-down" />}
            />
            <TextInput style={styles.textInput}
            label={'To'}
                value={composeDetails.receiver}
                onChangeText={(receiver) => { setComposeDetails({ receiver }) }}
                // left={<TextInput.Affix textStyle={styles.textInputAffix} text="To" />}
                right={<TextInput.Icon name="chevron-down" />}
            />
            <TextInput style={styles.textInput}
            label={'Subject'}
                value={composeDetails.subject}
                onChangeText={(subject) => { setComposeDetails({ subject }) }}
            />
            
            <TextInput style={styles.inputBody}
            underlineColor='white'
                    value={composeDetails.body}
                    placeholder="Compose email"
                    onChangeText={(body) => {setComposeDetails({body})}}
                    multiline={true}
                />
           <MailAttachments/>

        </SafeAreaView>
        
    );
};

const styles = {
    textInput: {
        paddingTop: 10,
        backgroundColor:COLORS.light,
        fontSize: 16,
        width: '100%',
        paddingLeft: 10
    },
    textInputAffix: { marginRight: 15, ...FONTS.h3, color: COLORS.gray },
    inputBody: { backgroundColor:COLORS.light,...FONTS.h3, paddingTop: 10, paddingLeft: 10 },
    
  
    
};

export default MyComponent;
