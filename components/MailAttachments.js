import React, { useCallback, useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Image } from 'react-native';
import { COLORS, SIZES, FONTS, icons } from '../constants';
import RBSheet from "react-native-raw-bottom-sheet";
import DocumentPicker from 'react-native-document-picker';
import {useCameraDevices, Camera } from 'react-native-vision-camera';

const MailAttachments = ({ onDataReceived }) => {
    const [fileResponse, setFileResponse] = useState([]);
    const [showCamera,setShowCamera]=useState(false)
    const refRBSheet2 = useRef();
    const refRBSheet1 = useRef();
    // const devices = 
    const device=useCameraDevices('back')
    const camera = useRef(null);

    useEffect(() => {
        async function getPermission(){
            const permission = await Camera.requestCameraPermission()
            console.log("---",permission)
            if(permission=='denied') await Linking.openSettings()

        }
        getPermission()

    }, [])


    function handlePressModal() {
        refRBSheet1.current.open()
    }
    function handlePress() {
        refRBSheet2.current.open()
    }
    
    const handleDocumentSelection = useCallback(async () => {
        try {
            const response = await DocumentPicker.pick({
                type: [DocumentPicker.types.pdf, DocumentPicker.types.images],
                presentationStyle: 'fullScreen',
                allowMultiSelection: true,
            });
            setFileResponse(response);
            onDataReceived(response);

        } catch (err) {
            console.warn(err);
        }

    }, []);

    if (!device) {
        return (
            <View >
                <Text>Camera not available.</Text>
            </View>
        );
    }
   
    
   
    return (
        <View style={styles.container}>

           {showCamera ? (<>
           <Camera
           ref={camera}
           style={StyleSheet.absoluteFill}
           device={device}
           isActive={showCamera}
           photo={true}/>

           </>):(<>
           </>)

           }


            <View style={styles.container}>

                <View style={styles.footer}>
                    <TouchableOpacity
                        onPress={handlePressModal}
                        style={{ flexDirection: 'row' }}>
                        <Image source={icons.profile} style={styles.iconStyle} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handlePress}>
                        <Image source={icons.attachment} style={styles.iconStyle} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setShowCamera(true)}>
                        <Image source={icons.camera} style={styles.iconStyle} />
                    </TouchableOpacity>
                    <TouchableOpacity  >
                        <Image source={icons.microphone} style={styles.iconStyle} />
                    </TouchableOpacity>
                </View>
                <RBSheet
                    ref={refRBSheet2}
                    closeOnDragDown={true}
                    closeOnPressMask={true}
                    customStyles={{
                        container: {
                            borderTopRightRadius: 20,
                            borderTopLeftRadius: 20,
                            height: 130,
                        },
                        draggableIcon: {
                            backgroundColor: COLORS.grey,
                        },
                    }}
                >
                    <View style={styles.contentContainer}>
                        <TouchableOpacity style={styles.replyForward}
                            onPress={handleDocumentSelection}>
                            <Image
                                style={styles.icon} source={icons.files} />
                            <Text style={styles.text}>Choose from files</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.replyForward}
                            onPress={handleDocumentSelection}>
                            <Image
                                style={styles.icon} source={icons.photos} />
                            <Text style={styles.text}>Choose from photo library</Text>
                        </TouchableOpacity>

                    </View>
                </RBSheet>


                <RBSheet
                    ref={refRBSheet1}
                    closeOnDragDown={true}
                    closeOnPressMask={true}

                    customStyles={{
                        container: {
                            borderTopRightRadius: 20,
                            borderTopLeftRadius: 20,
                            height: 160
                        },
                        draggableIcon: {
                            backgroundColor: COLORS.grey,
                        }
                    }}
                >
                    <View style={styles.contentContainer}>
                        <TouchableOpacity style={styles.replyForward}>
                            <Image
                                style={styles.icon} source={icons.reply} />
                            <Text style={styles.text}>Reply</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.replyForward}>
                            <Image
                                style={styles.icon} source={icons.forward} />
                            <Text style={styles.text}>Forward</Text>
                        </TouchableOpacity>
                        <View style={styles.borderBottom} />
                        <TouchableOpacity style={styles.replyForward}>
                            <Image
                                style={styles.icon} source={icons.person} />
                            <Text style={styles.text}>Edit Recipients</Text>
                        </TouchableOpacity>


                    </View>
                </RBSheet>

            </View>
        </View>
    );
};



export default MailAttachments;


const styles = StyleSheet.create({
    footer: {
        // flex: 1,
        borderTopWidth: StyleSheet.hairlineWidth,
        borderTopColor: COLORS.gray,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: COLORS.light,
        marginTop: '110%',
        left: 0,
        right: 0,
        bottom: 20,
        width: '100%',
        height: '10%'

    },
    borderBottom: {
        width: '100%',
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: COLORS.gray,
    },

    iconStyle: {
        marginLeft: SIZES.radius,
        tintColor: COLORS.grey,
        width: 23,
        height: 23

    },
    scontainer: {

        flex: 1,
       alignItems:'center',
       justifyContent:'center'
    },
    container: {

        flex: 1,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        elevation: 0,
        backgroundcolor: 'grey'
    },
    contentContainer: {
        paddingHorizontal: 15,
        flex: 1,
        alignItems: 'flex-start'
    },
    replyForward: {
        flexDirection: 'row', padding: 10
    },
    icon: {
        width: 20,
        height: 20,
        tintColor: COLORS.grey
    },
    text: { marginLeft: 10, ...FONTS.body3, color: COLORS.gray }

});

