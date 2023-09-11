//import liraries
import React, { useState,useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView ,FlatList} from 'react-native';
import axios from 'axios';
import { COLORS } from '../../constants';
import { MailCard } from '../../components';
// create a component
const Archive = ({navigation}) => {
    const [threads, setThreads] = useState([])
  useEffect(() => {
    const fetchData = async () => {

      try {
        const response = await axios.get("http://172.29.64.1:3000/archive");
        setThreads(response.data.threads);
        console.log("-------", response.data);
      }
      catch (error) {
        console.error("Error fetching data:", error);

      }
    };
    fetchData();
  }, []);
    return (
        <SafeAreaView  style={styles.container}> 
        <FlatList
        data={threads}
        vertical
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => `${item.id}`} 
        renderItem={({ item }) => (
          <MailCard
            containerStyle={{
              marginHorizontal: 28
            }}
            mailItem={item}
            onPress={() => { navigation.navigate('MailBody', { item: item }) }}
          />
        )}
      />
        </SafeAreaView>
  
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: COLORS.light
      },
});


export default Archive;
