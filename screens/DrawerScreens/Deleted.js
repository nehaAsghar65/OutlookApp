import React, { useState,useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView ,FlatList} from 'react-native';
import axios from 'axios';
import { COLORS, FONTS } from '../../constants';
import BASE_URL from '../../assets/endPoint';
// create a component
const Deleted = () => {
   
    const [isEmpty, setIsEmpty]=useState(false)
    const [threads, setThreads] = useState([])
  useEffect(() => {
    const fetchData = async () => {

      try {
        const response = await axios.get(`${BASE_URL}/deleted`);
        if(response.data.threads=='')
        {setIsEmpty(true)}
        setThreads(response.data.threads);
        // console.log("-------", response.data);
      }
      catch (error) {
        console.error("Error fetching data:", error);

      }
    };
    fetchData();
  }, []);
    return (
        <SafeAreaView style={styles.container}>
            {isEmpty && <View style={{justifyContent:'center',alignItems:'center',}}><Text style={{...FONTS.h2}}>No deleted items</Text></View>}
        </SafeAreaView>

    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: COLORS.light
    },
});

export default Deleted;
