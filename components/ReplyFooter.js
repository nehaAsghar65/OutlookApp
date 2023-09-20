import React, { Component, useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Animated, Dimensions, ScrollView } from 'react-native';
import { COLORS, SIZES, FONTS, icons } from '../constants';
import FormInputs from './FormInputs';
import RBSheet from "react-native-raw-bottom-sheet";
const ReplyFooter = () => {
  const [reply, setReply] = useState('');
  const refRBSheet = useRef();



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
          value={reply}
          onChange={(text) => setReply(text)}
          prependComponent={

            <TouchableOpacity
              onPress={() => refRBSheet.current.open()}
              style={{ flexDirection: 'row', paddingHorizontal: SIZES.radius }}>
              <Image source={icons.reply} style={styles.iconStyle} />
              <Image source={icons.arrow_down} style={styles.iconStyle} />
            </TouchableOpacity>
          }

        />
      </View>

      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}

        customStyles={{
          container: {
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            height: 180
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
      {/* </View> */}
    </View >
  );
};



export default ReplyFooter;


const styles = StyleSheet.create({
  footer: {
    position: 'relative',
    borderTopWidth: 0.5,
    borderTopColor: COLORS.gray,

    backgroundColor: COLORS.light,
    marginTop: '67%',
    bottom: 0,


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
  text: { marginLeft: 10, ...FONTS.body3 }

});

