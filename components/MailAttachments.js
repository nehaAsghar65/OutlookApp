import React, { useCallback, useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Animated, Dimensions, Alert, ScrollView } from 'react-native';
import { COLORS, SIZES, FONTS, icons } from '../constants';
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { RNCamera } from 'react-native-camera'
import { BottomSheet } from '../screens';
import IconButton from './IconButton'
// import { Camera } from 'react-native-vision-camera';

const MailAttachments = () => {
    const [cameraPermission, setCameraPermission] = useState(false);
    const { height } = Dimensions.get('window');
    const BottomSheetModalRef = useRef(null);
    const [showBottomSheet, setShowBottomSheet] = useState(false);
    const [activeBottomSheet, setActiveBottomSheet] = useState("")
    const [isRecording, setIsRecording] = useState(false)


    const snapPoints = ["31%"]

    function handlePressModal() {
        BottomSheetModalRef.current?.present();
    }
    function handlePress() {
        setActiveBottomSheet("modal2")
        // BottomSheetModalRef2.current?.present();
        console.log(activeBottomSheet, '===')
    }
    // useEffect(() => {
    //     getPermissions();

    // }, [])
    // const getPermissions = async () => {
    //     const newCameraPermission = await Camera.requestCameraPermission()
    //     const newMicrophonePermission = await Camera.requestMicrophonePermission()
    // }



    return (
        <View style={styles.container}>


            {cameraPermission && (
                <RNCamera

                    ref={ref => {
                        this.camera = ref
                    }}

                    captureAudio={false}
                    style={{ flex: 1, alignItems: 'flex-start' }}
                    type={RNCamera.Constants.Type.back}
                    androidCameraPermissionOptions={{
                        title: 'Permission to use camera',
                        message: 'We need your permission to use your camera',
                        buttonPositive: 'Ok',
                        buttonNegative: 'Cancel',
                    }}
                />
            )}


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
                    <TouchableOpacity onPress={() => setCameraPermission(true)}>
                        <Image source={icons.camera} style={styles.iconStyle} />
                    </TouchableOpacity>
                    <TouchableOpacity >
                        <Image source={icons.microphone} style={styles.iconStyle} />
                    </TouchableOpacity>
                </View>
                {activeBottomSheet == "modal2" && <BottomSheet activeBottomSheet={activeBottomSheet} setActiveBottomSheet={setActiveBottomSheet} />}
                <BottomSheetModalProvider >
                    <BottomSheetModal
                        ref={BottomSheetModalRef}
                        index={0}
                        // onChange={handleSheetChange}
                        snapPoints={snapPoints}
                        backgroundStyle={{
                            borderRadius: 40, backgroundColor: COLORS.light, shadowColor: "black",
                            shadowOffset: {
                                width: "100%",
                                height: "100%",
                            },
                            shadowOpacity: -40.53,
                            shadowRadius: 90.97,
                            elevation: 10,
                        }}>
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
                            <IconButton

                                icon={icons.microphone}
                                iconStyle={{ tintColor: COLORS.grey }}
                            // onPress={() => setIsVisible(!isVisible)}
                            />

                        </View>
                    </BottomSheetModal>
                </BottomSheetModalProvider>

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
        width: 25,
        height: 25

    },
    container: {

        flex: 1,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        elevation: 0,
        // backgroundColor: 'black',
        // borderTopColor: "transparent",
        // height: 100,
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
    text: { marginLeft: 10, ...FONTS.body3 }

});

