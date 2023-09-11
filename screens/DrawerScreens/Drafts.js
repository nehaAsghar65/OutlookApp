//import liraries
import React, { useEffect,useState} from 'react';
import { View, Text, StyleSheet ,SafeAreaView,FlatList ,TouchableOpacity} from 'react-native';
import axios from 'axios';
import { MailCard } from '../../components';
import { COLORS,FONTS,icons } from '../../constants';
const Drafts = ({navigation}) => {
    const [isEmpty, setIsEmpty]=useState(false)
    const [threads, setThreads] = useState([])
  useEffect(() => {
    const fetchData = async () => {

      try {
        const response = await axios.get("http://172.29.64.1:3000/drafts");
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

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1, backgroundColor: COLORS.black,
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
        shadowOffset: {
          width: 0,
          height: 2,
        },
       
      },
      composeButtonText: {
        marginLeft: 10,
        ...FONTS.h3,
        color: "white",
      },
});

//make this component available to the app
export default Drafts;
