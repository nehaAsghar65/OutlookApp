import React, { useRef } from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Modal, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { COLORS, FONTS, SIZES } from '../constants';
const PickerList = ({ showList, setShowList, setFilterStatus ,data}) => {

    const modalRef = useRef(null);
    const closeModal = () => {
        setShowList(false);
    };

    const handleOverlayPress = (e) => {
        if (modalRef.current && e.target === modalRef.current) {
            closeModal();
        }
    };

    return (

        <Modal
            animationType="fade"
            transparent={true}
            visible={showList}
            onRequestClose={() => {
                setShowList(!showList);
            }}>
            <TouchableWithoutFeedback onPress={handleOverlayPress}>
                <View ref={modalRef} style={styles.modalOverlay}>
                    <View style={styles.modalView}>
                        {data.map((item, index) => (
                            <TouchableOpacity
                                key={index}
                                style={styles.item}
                                onPress={() => {
                                    closeModal();
                                    setFilterStatus(item.title);
                                }}
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
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
};
const styles = StyleSheet.create({
    container: {

        width: 170,
        height: 270,
        position: 'absolute',
        right: 10,
        top: 50,
        backgroundColor: COLORS.light,
        shadowOffset: {
            width: "100%",
            height: "100%",
        },
        shadowOpacity: 40.53,
        shadowRadius: 90.97,
        elevation: 10,
        shadowColor: 'black'
    },
    item: {
        flexDirection: "row",
        width: "100%",
        height: 20,
        paddingHorizontal: 15,
        marginTop: 15
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },
    modalView: {
        right: 10,
        top: 50,
        width: 'auto',
        height: 'auto',
        position: 'absolute',
        margin: 20,
        paddingBottom:12,
        borderRadius:10,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
    },
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0)',
        justifyContent: 'center',
        alignItems: 'center',
    },
   
    item: {
        flexDirection: "row",
        width: "100%",
        height: 20,
        paddingHorizontal: 15,
        marginTop: 15
    },
});


export default PickerList;
