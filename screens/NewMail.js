import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, SafeAreaView,StyleSheet } from 'react-native';
import { COLORS, SIZES, FONTS } from '../constants';
import { useNavigation } from '@react-navigation/native';
import { MailAttachments } from '../components';
const MyComponent = () => {
    const navigation=useNavigation()
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
           headerTitle:()=>(<View><Text style={{color:'white',fontSize: 18, fontWeight: "bold"}}>New Message</Text>
           <Text style={{color:'white',...FONTS.body5}}>{composeDetails.sender}</Text></View>),
        //   headerRight: () => <Text style={{color:'white'}}>text</Text>
        })
      }, [navigation])

    return (
        <SafeAreaView style={{ flex: 1, paddingVertical: SIZES.padding,paddingHorizontal:10, backgroundColor: COLORS.light }}>
            
            <View style={{ flexDirection: 'row' ,}}>
            <Text style={styles.fieldTitle}>To</Text>
                <TextInput
                    style={styles.input}
                    value={composeDetails.receiver}
                    onChangeText={(text) => handleChange('receiver', text)}
                />
            </View>
            <View style={styles.borderBottom}/>


            <View style={{ flexDirection: 'row',}}>
            <Text style={styles.fieldTitle}>Subject</Text>
                <TextInput
                
                    style={styles.input}
                    value={composeDetails.subject}
                    onChangeText={(text) => handleChange('subject', text)}
                    
                />
                
            </View>
            <View style={styles.borderBottom}/>



            <View style={{ flexDirection: 'row' }}>
            <Text style={styles.fieldTitle}>Body</Text>
                <TextInput
                    style={styles.textArea}
                    multiline
                    value={composeDetails.body}
                    onChangeText={(text) => handleChange('body', text)}
                    placeholder="Compose your email..."

                />
            </View>
            <MailAttachments/>
        </SafeAreaView>
    );
};

const styles = {
    borderBottom:{
      
        width: '95%',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: COLORS.gray,
      },
    input: {
        
        color: 'white',
        // borderWidth: 1,
        width:"80%",
        marginBottom: 0,
        borderRadius: 5,
        ...FONTS.body3,
        color:COLORS.gray,
        backgroundColor: COLORS.light,
        
    },
    textArea: {
        color: 'white',
        // borderWidth: 1,
        width:"80%",
        marginRight:"50%",
        marginBottom: 20,
        marginTop:5,
        borderRadius: 5,
        fontSize: 16,
        backgroundColor: COLORS.light,
        height: 150,
        textAlignVertical: 'top',
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    fieldTitle: {
        color: COLORS.gray,
        ...FONTS.body3,
        padding: 15,
        backgroundColor: COLORS.light,
    }
};

export default MyComponent;
