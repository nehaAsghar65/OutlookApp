import React, { useEffect, useState } from 'react'
import { Text, View, SafeAreaView, StyleSheet, TouchableOpacity,Image } from 'react-native' // Import TouchableOpacity for the button
import { COLORS, SIZES, FONTS,icons } from '../constants'
import { MailCard, TextButton } from '../components'
import { FlatList } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { dummyData } from '../constants'

import axios from 'axios'

const Inbox = ({navigation}) => {
  const [data, setData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://mocki.io/v1/59788af5-daef-4e16-9995-3568c8c02dd2");
        setData(response.data);
        // console.log("-------", response.data);
      }
      catch (error) {

      }
    };
    fetchData();
  }, []);


  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        vertical
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => `${item.id}`}
        renderItem={({ item }) => (
          <MailCard
            containerStyle={{
              marginHorizontal: SIZES.padding
            }}
            mailItem={item}
            onPress={() => { navigation.navigate('MailBody',{item:item}) }}
          />
        )}
      />
      
      {/* New mail Button */}
      <TouchableOpacity
        style={styles.composeButton}
        onPress={()=>navigation.navigate('NewMail')}
      >
        <Image 
        style={{height:20, width:20, tintColor: "white"}}
        source={icons.plus}/>
        <Text style={styles.composeButtonText}>New Mail</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "black", paddingVertical: SIZES.padding },
  // Your other styles...

  // Compose Button Styles
  composeButton: {
    flexDirection:"row",
    justifyContent:"space-between",
    position: 'absolute',
    bottom: 30,
    right: 16,
    backgroundColor: COLORS.primary,
    borderRadius: 30,
    paddingVertical: 12,
    paddingHorizontal: 24,
    // shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // elevation: 5,
  },
  composeButtonText: {
    marginLeft:10,
    ...FONTS.h3,
    color: "white",
  },
});

export default Inbox;
