import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { COLORS ,icons} from '../constants';

const TabIcon = ({ focused, icon }) => {
    
    const imageStyle = [styles.image, focused && { tintColor: COLORS.primary }];
    if(icon==icons.email){
        focused=true
    }
    return (
        <View style={styles.container}>
            <Image source={icon} resizeMode="contain" style={imageStyle} />
            {focused && (
                <View
                    style={styles.imagefocused}
                />
            )}
        </View>
    );
};

export default TabIcon;




const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 80,
        width: 50,
    },
    image: {
        width: 30,
        height: 30,
        tintColor: COLORS.grey,
    },
    imagefocused: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 5,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        // backgroundColor: COLORS.primary,
    }
});
