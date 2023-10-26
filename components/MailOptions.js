import 'react-native-gesture-handler';
import React, { useState } from "react";
import { Image, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { PickerList } from '../components';
import { icons, dummyData } from '../constants';
import { useNavigation } from '@react-navigation/native';
import { useToast } from 'native-base';
import { useAppContext } from '../context/AppContext';
function MailOptions({ route }) {
    const { allthreads, item, reRenderFlag, setReRenderFlag } = route.params;
    const [showPicker, setShowPicker] = useState(false);
    const [filterStatus, setFilterStatus] = useState("Filter")
    const navigation = useNavigation()
    const { reRender } = useAppContext();
    const toast = useToast();
    
    let inboxData = {
        data: [
            allthreads
        ]
    };

    const deleteThread = () => {
 
        const updatedThreads = inboxData.data.map((threads) => {

            if (threads) {
                threads = threads.filter(
                    (x) => x.main_message_id !== item.main_message_id
                );
            }
            return threads
        })

        inboxData.data = updatedThreads;
        console.log(inboxData.data, '---0---')
        toast.show({
            description: "Conversation Delete",
            placement: 'bottom',
            style: { width: 400, height: 50, borderRadius: 10, justifyContent: 'center' }
        })

        // setReRenderFlag(!reRenderFlag)
        navigation.goBack()
    }
    return (
        <View style={{ flexDirection: 'row' }}>
            <Text>{reRender}</Text>
            <TouchableOpacity onPress={() => deleteThread()}>
                <Image
                    source={icons.bin}
                    style={{
                        width: 20,
                        height: 20,
                        tintColor: 'white',
                        marginRight: 20
                    }}
                />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => { }}>
                <Image
                    source={icons.archive}
                    style={{
                        width: 20,
                        height: 20,
                        tintColor: 'white',
                        marginRight: 20
                    }}
                />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => setShowPicker(!showPicker)}
            >
                {showPicker &&
                    <PickerList
                        showList={showPicker}
                        setShowList={setShowPicker}
                        filterStatus={filterStatus}
                        setFilterStatus={setFilterStatus}
                        data={dummyData.mailItemOptions}
                    />
                }
                <Image
                    source={icons.dots}
                    style={{
                        width: 20,
                        height: 20,
                        tintColor: 'white',
                        marginRight: 20
                    }}
                />
            </TouchableOpacity>
        </View>
    );
}

export default MailOptions;