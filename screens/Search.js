//import liraries
import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FONTS,SIZES } from '../constants';
import { Searchbar } from 'react-native-paper';
// create a component
const Search = () => {
    const navigation = useNavigation()
   
    return (
        <View style={styles.container}>
            <Text>Search</Text>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
    },
});


export default Search;
