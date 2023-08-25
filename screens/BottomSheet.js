import React, { useEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Animated, Dimensions, Alert, ScrollView } from 'react-native';
import { COLORS, SIZES, FONTS, icons } from '../constants';
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';
const BottomSheet = ({ activeBottomSheet, setActiveBottomSheet }) => {
    const BottomSheetModalRef = useRef(null);
    const snapPoints = ["25%"]
    function handleSheetChange() {
        setActiveBottomSheet('modal1')
    }


    useEffect(() => {
        BottomSheetModalRef.current?.present();
        console.log(activeBottomSheet);

    }, [activeBottomSheet]);

    return (
        <BottomSheetModalProvider >
            <BottomSheetModal
                ref={BottomSheetModalRef}
                index={0}
                // onChange={handleSheetChange}
                snapPoints={snapPoints}
                backgroundStyle={{
                    borderRadius: 40, backgroundColor: COLORS.light, shadowColor: "#black",
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
                            style={styles.icon} source={icons.files} />
                        <Text style={styles.text}>Choose from files</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.replyForward}>
                        <Image
                            style={styles.icon} source={icons.photos} />
                        <Text style={styles.text}>Choose from photo library</Text>
                    </TouchableOpacity>

                </View>
            </BottomSheetModal>
        </BottomSheetModalProvider>
    );
};


export default BottomSheet;
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
        bottom: 0,
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