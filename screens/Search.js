//import liraries
import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FONTS,SIZES } from '../constants';
import { Searchbar } from 'react-native-paper';
// create a component
const Search = () => {
    const navigation = useNavigation()
    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTintColor: "white",
            headerStyle: {
                backgroundColor: "black",
            },
            headerRight:()=>(<View>
                 <Searchbar
                    placeholder="Search in Mail"
                    // onChangeText={(search) => {this.setState({search})}}
                    // value={this.state.search}
                    icon="menu"
                    style={{margin: 15, marginTop: 35}}
                    // onIconPress={() => this.props.navigation.toggleDrawer()}
                />
           </View>),
         //   headerRight: () => <Text style={{color:'white'}}>text</Text>
        })

    }, [navigation])
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
