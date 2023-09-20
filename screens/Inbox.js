import React, { useEffect, useState } from 'react'
import { Text, View, SafeAreaView, StyleSheet, TouchableOpacity, Image } from 'react-native' // Import TouchableOpacity for the button
import { COLORS, SIZES, FONTS, icons } from '../constants'
import { MailCard, TextButton } from '../components'
import { FlatList } from 'react-native-gesture-handler'
import colors from '../constants'
import axios from 'axios'
import BASE_URL from '../assets/endPoint'
const Inbox = ({ navigation }) => {
  const [threads, setThreads] = useState([])
  useEffect(() => {


    async function fetchData() {
      const response = await axios.get(`${BASE_URL}/inbox`);

      setThreads(response.data.threads);
    }
    fetchData();
  }, []);


  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={threads}
        vertical
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => `${item.main_message_id}`}
        renderItem={({ item }) => (
          <MailCard
            key={item.main_message_id}
            containerStyle={{
              marginHorizontal: 28
            }}
            mailItem={item}
            onPress={() => {
              navigation.navigate('MailBody', { item: item });
            }}
          />
        )}
      />




      {/* New mail Button */}
      <TouchableOpacity
        style={styles.composeButton}
        onPress={() => navigation.navigate('NewMail')}
      >
        <Image
          style={{ height: 20, width: 20, tintColor: "white" }}
          source={icons.plus} />
        <Text style={styles.composeButtonText}>New Mail</Text>
      </TouchableOpacity>
    </SafeAreaView>
    // <Text>{JSON.stringify(threads)}</Text>
  );
};




const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: COLORS.light,
    //  paddingHorizontal:SIZES.padding
  },
  composeButton: {
    flexDirection: "row",
    justifyContent: "space-between",
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
    marginLeft: 10,
    ...FONTS.h3,
    color: "white",
  },
});

export default Inbox;
