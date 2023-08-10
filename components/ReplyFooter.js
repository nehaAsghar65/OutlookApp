import React, { Component, useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Animated, Dimensions, ScrollView } from 'react-native';
import { COLORS, SIZES, FONTS, icons } from '../constants';
import IconButton from './IconButton';
import FormInputs from './FormInputs';
import { BottomSheetModal, BottomSheetModalProvider } from '@gorhom/bottom-sheet';

// ... (import statements)

const ReplyFooter = () => {
  const [reply, setReply] = useState('');
  const { height } = Dimensions.get('window');
  const BottomSheetModalRef = useRef(null);
  const snapPoints = ["50%"]

  function handlePressModal() {
    BottomSheetModalRef.current?.present();
  }

  return (
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
            onPress={handlePressModal}
            style={{ flexDirection: 'row', paddingHorizontal: SIZES.radius }}>
            <Image source={icons.reply} style={styles.iconStyle} />
            <Image source={icons.arrow_down} style={styles.iconStyle} />
          </TouchableOpacity>
        }

      />
      <BottomSheetModalProvider >
        <BottomSheetModal
          ref={BottomSheetModalRef}
          index={0}
          snapPoints={snapPoints}
          backgroundStyle={{ borderRadius: 40, backgroundColor: COLORS.grey }}>
          <View>
            <Text>hello</Text>
          </View>
        </BottomSheetModal>
      </BottomSheetModalProvider>
    </View>
  );
};



export default ReplyFooter;


const styles = StyleSheet.create({

  footer: {
    // flexDirection: 'row',
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '7%',
    backgroundColor: COLORS.light,
    borderTopColor: 'black'

  },
  iconStyle: {
    tintColor: COLORS.grey,
    width: 22,
    height: 22

  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  // container: {
  //     flex: 1,
  //     zIndex: 1,
  //     backgroundColor: 'white',
  //     alignItems: 'center',
  //     justifyContent: 'center'
  //   },
  dragHandler: {
    alignSelf: 'stretch',
    // height: 2,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ccc'
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 15,
  }
});

