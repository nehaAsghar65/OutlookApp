import React from 'react'
import { Text, View, TextInput, StyleSheet } from 'react-native'
import { SIZES, FONTS, COLORS } from '../constants'
const FormInputs = ({
    containerStyle,
    inputContainerStyle,
    placeHolder,
    inputStyle,
    value = "",
    prependComponent,
    appendComponent,
    onChangeText,
    onPress,
    editable,
    secureTextEntry,
    keyboardType = "default",
    autoCompleteType = "off",
    autoCapitalize = "none",
    maxLenght,
    placeHolderTextColor = COLORS.grey60
}) => {
    return (
        <View style={{ ...containerStyle }}>
            <View style={styles.container}>
                {prependComponent}
                <TextInput style={styles.textInput}
                    value={value}
                    placeholder={placeHolder}
                    placeholderTextColor={placeHolderTextColor}
                    secureTextEntry={secureTextEntry}
                    keyboardType={keyboardType}
                    autoCompleteType={autoCompleteType}
                    autoCapitalize={autoCapitalize}
                    maxLength={maxLenght}
                    onChangeText={(text) => onChangeText(text)}
                    onPressIn={onPress}
                    editable={editable}
                    multiline={true} />
                {appendComponent}
            </View>

        </View>
    )
}


export default FormInputs

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        height: 50,
        paddingHorizontal: SIZES.radius,
        borderBottomColor: COLORS.grey,
        borderBottomWidth: 0.5,
        // borderRadius: SIZES.radius,

        alignItems: 'center',
        backgroundColor: COLORS.light,
        // ...inputContainerStyle

    },
    textInput: {
        flex: 1,
        paddingVertical: 0,
        ...FONTS.body3,
        // ...inputStyle

    }
})