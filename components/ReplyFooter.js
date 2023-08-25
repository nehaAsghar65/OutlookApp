import React, { Component, useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Animated, Dimensions, ScrollView } from 'react-native';
import { COLORS, SIZES, FONTS, icons } from '../constants';
import FormInputs from './FormInputs';
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';

const ReplyFooter = () => {
  const [reply, setReply] = useState('');
  const { height } = Dimensions.get('window');
  const BottomSheetModalRef = useRef(null);
  const snapPoints = ["50%"]

  function handlePressModal() {
    BottomSheetModalRef.current?.present();
  }

  return (
    <View style={styles.container}>
      {/* <View style={styles.container}> */}
        <View style={styles.footer}>
          <FormInputs
            containerStyle={{
              borderRadius: SIZES.radius,
              backgroundColor: COLORS.primary,
            }}
            placeHolder="Reply"
            // defaultValue={reply}
            
            onChange={(text) => setReply(text)}

            prependComponent={

              <TouchableOpacity
                onPress={handlePressModal}
                style={{ flexDirection: 'row', paddingHorizontal: SIZES.radius }}>
                <Image source={icons.reply} style={styles.iconStyle} />
                <Image source={icons.arrow_down} style={styles.iconStyle} />
              </TouchableOpacity>
            }

          />
        </View>

        <BottomSheetModalProvider >
          <BottomSheetModal
            ref={BottomSheetModalRef}
            index={0}
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
          </BottomSheetModal>
        </BottomSheetModalProvider>
      {/* </View> */}
    </View >
  );
};



export default ReplyFooter;


const styles = StyleSheet.create({
  footer: {
    position:'relative',
    borderTopWidth: 0.5,
    borderTopColor: COLORS.gray,
    // flexDirection: 'row',
    // justifyContent: 'flex-start',
    // alignItems: 'center',
    backgroundColor: COLORS.light,
    marginTop: '67%',
    // left: 0,
    // right: 0,
    bottom: 0,
    // width: '100%',
    // height: '10%'

},
  borderBottom: {
    width: '100%',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: COLORS.gray,
  },

  iconStyle: {
    tintColor: COLORS.grey,
    width: 22,
    height: 22

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

