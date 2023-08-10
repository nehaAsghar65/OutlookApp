import React, { useState, useEffect } from 'react'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { StyleSheet, Text, View, Image, Modal, TouchableWithoutFeedback, TouchableOpacity, FlatList, Pressable } from 'react-native'
import { useAnimationState } from 'moti'
import { COLORS, FONTS, SIZES, icons } from '../constants'
import FormInputs from './FormInputs'
import TextButton from './TextButton'
import IconButton from './IconButton'
import axios from 'axios'
import CountryDropDown from './CountryDropDown'
import CheckBox from './CheckBox'
import { Home } from '../screens'
import { useNavigation } from '@react-navigation/native'


const AuthContainer = ({ mode, setMode }) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [name, setName] = useState("")
    const [isVisible, setIsVisible] = useState(false)
    const [countries, setCountries] = useState([])
    const [termsChecked, setTermsChecked] = useState(false)
    const [selectedCountry, setSelectedCountry] = useState(null)
    const [showCountryModal, setShowCountryModal] = useState(false)

    const navigation = useNavigation()
    const animationState = useAnimationState({
        login: {
            height: SIZES.height * 0.55
        },
        signup: {
            height: SIZES.height * 0.7
        }
    })
    useEffect(() => {
        const fetchData = async () => {
            try {


                // Fetch countries
                const response = await axios.get("https://restcountries.com/v2/all");

                const countryData = response.data.map(item => ({
                    code: item.alpha2Code,
                    name: item.name,
                    callingCode: `+${item.callingCodes[0]}`,
                    flag: `https://flagcdn.com/w320/${item.alpha2Code.toLowerCase()}.png`
                }));

                // console.log(countryData)
                setCountries(countryData);
            } catch (error) {
                console.error("Error fetching countries:", error);
            }
        };
        animationState.transitionTo('login');
        fetchData();
    }, []);

    function renderLogin(navigation) {

        return (
            <View

                style={{
                    // backgroundColor:COLORS.transparentBlack1,
                    marginTop: SIZES.padding,
                    height: SIZES.height * 0.55,
                }}>
                <View style={styles.AuthContainer}>
                    <Text style={styles.loginTitle}>
                        Login to continue
                    </Text>
                    <KeyboardAwareScrollView
                        enableOnAndroid={true}
                        keyboardDismissMode='on-drag'
                        keyboardShouldPersistTaps={'handled'}
                        extraScrollHeight={-300}
                        contentContainerStyle={{
                            flexGrow: 1,
                            justifyContent: 'center'
                        }}>
                        {/* Email */}
                        <FormInputs
                            containerStyle={{
                                borderRadius: SIZES.radius,
                                backgroundColor: COLORS.primary,
                            }}
                            placeHolder="Email"
                            value={email}
                            onChange={(text) => setEmail(text)}
                            prependComponent={
                                <Image
                                    style={styles.emailField}
                                    source={icons.email}
                                />
                            }

                        />

                        {/* password */}
                        <FormInputs

                            containerStyle={{
                                marginTop: SIZES.radius,
                                borderRadius: SIZES.radius,
                                backgroundColor: COLORS.error,
                            }}
                            placeHolder="Password"
                            value={password}
                            secureTextEntry={!isVisible}
                            onChange={(text) => setPassword(text)}
                            prependComponent={
                                <Image
                                    style={styles.emailField}
                                    source={icons.lock} />
                            }
                            appendComponent={<IconButton

                                icon={isVisible ? icons.eyeoff : icons.eye}
                                iconStyle={{ tintColor: COLORS.grey }}
                                onPress={() => setIsVisible(!isVisible)} />}
                        />
                        <View style={{ alignItems: 'flex-end' }}>
                            <TextButton
                                label="Forgot Password?"
                                contentContainerStyle={{
                                    marginTop: SIZES.radius,
                                    backgroundColor: null
                                }}
                                labelStyle={{
                                    color: COLORS.support3,
                                    ...FONTS.h3
                                }} />

                        </View>

                    </KeyboardAwareScrollView>
                    <TextButton
                        label={"Log in"}
                        contentContainerStyle={{
                            height: 55,
                            backgroundColor: COLORS.primary,
                            borderRadius: SIZES.radius
                        }}
                        labelStyle={{ ...FONTS.h3 }}
                        onPress={() => navigation.navigate("Inbox")}
                    />

                </View>
                {renderFooter()}

            </View>
        )
    }
    function renderFooter() {
        return (
            <View style={{

                flexDirection: 'row',
                height: 80,
                alignItems: "flex-end",
                justifyContent: "center",
                marginTop: -30,
                marginHorizontal: SIZES.radius,
                paddingBottom: SIZES.radius,
                borderBottomLeftRadius: SIZES.radius,
                borderBottomRightRadius: SIZES.radius,
                backgroundColor: COLORS.light,
                zIndex: 0
            }}>
                <Text style={{
                    color: COLORS.grey,
                    ...FONTS.body5
                }}>
                    {mode == "login" ? "Don't have an account?" : "Already have an account."}

                </Text>
                <TextButton
                    label={mode == "login" ? "Creacte new account" : "Log In"}
                    contentContainerStyle={{
                        marginLeft: SIZES.base,
                        backgroundColor: null
                    }}
                    labelStyle={{
                        color: COLORS.support3,
                        ...FONTS.h5
                    }}
                    onPress={() => {
                        if (animationState.current === "login") {
                            animationState.transitionTo('signup')
                            setMode("signup")

                        }
                        else {
                            animationState.transitionTo('login')
                            setMode("login")

                        }
                    }} />

            </View>
        )
    }
    function renderSignup() {
        return (
            <View

                style={{
                    marginTop: SIZES.padding,
                    height: SIZES.height * 0.75,
                    zIndex: 0
                }}>
                <View style={styles.AuthContainer}>
                    <Text style={styles.loginTitle}>
                        Create new account
                    </Text>
                    <KeyboardAwareScrollView
                        enableOnAndroid={true}
                        keyboardDismissMode='on-drag'
                        keyboardShouldPersistTaps={'handled'}
                        extraScrollHeight={-300}
                        contentContainerStyle={{
                            flexGrow: 1,
                            marginTop: SIZES.padding,
                            paddingBottom: SIZES.padding * 2
                        }}>
                        {/* Name */}
                        <FormInputs
                            containerStyle={{
                                marginTop: SIZES.radius,
                                borderRadius: SIZES.radius,
                                backgroundColor: COLORS.error
                            }}
                            placeHolder="Name"
                            value={name}
                            onChange={(text) => setName(text)}
                            prependComponent={
                                <Image
                                    source={icons.person}
                                    style={{
                                        width: 25,
                                        height: 25,
                                        marginRight: SIZES.base
                                    }} />
                            }
                        />
                        {/* Email */}
                        <FormInputs
                            containerStyle={{
                                marginTop: SIZES.radius,
                                borderRadius: SIZES.radius,
                                backgroundColor: COLORS.error
                            }}
                            placeHolder="Email"
                            value={email}
                            onChange={(text) => setEmail(text)}
                            prependComponent={
                                <Image
                                    source={icons.email}
                                    style={{
                                        width: 25,
                                        height: 25,
                                        marginRight: SIZES.base
                                    }} />
                            }
                        />
                        {/* Phone */}
                        <FormInputs
                            containerStyle={{
                                marginTop: SIZES.radius,
                                borderRadius: SIZES.radius,
                                backgroundColor: COLORS.error
                            }}
                            placeHolder="Phone"
                            value={phone}
                            onChange={(text) => setPhone(text)}
                            prependComponent={
                                <Image
                                    source={icons.phone}
                                    style={{
                                        width: 25,
                                        height: 25,
                                        marginRight: SIZES.base
                                    }} />
                            }
                        />
                        {/* country */}
                        <CountryDropDown
                            containerStyle={{
                                marginTop: SIZES.radius,
                                borderRadius: SIZES.radius
                            }}
                            selectedCountry={selectedCountry}
                            onPress={() => setShowCountryModal(!showCountryModal)}
                        />
                        {/* Password */}
                        <FormInputs

                            containerStyle={{
                                marginTop: SIZES.radius,
                                borderRadius: SIZES.radius,
                                backgroundColor: COLORS.error,
                            }}
                            placeHolder="Password"
                            value={password}
                            secureTextEntry={!isVisible}
                            onChange={(text) => setPassword(text)}
                            prependComponent={
                                <Image
                                    style={styles.emailField}
                                    source={icons.lock} />
                            }
                            appendComponent={<IconButton

                                icon={isVisible ? icons.eyeoff : icons.eye}
                                iconStyle={{ tintColor: COLORS.grey }}
                                onPress={() => setIsVisible(!isVisible)} />}
                        />
                        <CheckBox
                            containerStyle={{
                                marginTop: SIZES.radius
                            }}
                            isSelected={termsChecked}
                            onPress={() => setTermsChecked(!termsChecked)}
                        />


                    </KeyboardAwareScrollView>
                    <TextButton
                        label="Create Account"
                        contentContainerStyle={{
                            height: 55,
                            borderRadius: SIZES.radius,
                            backgroundColor: COLORS.primary
                        }}
                        labelStyle={{ ...FONTS.h3 }}
                        onPress={() => console.log("account created")} />

                </View>

                {renderFooter()}


                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={showCountryModal}
                >
                    <TouchableWithoutFeedback
                        onPress={() => setShowCountryModal(false)}
                    >
                        <View
                            style={{
                                flex: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                                backgroundColor: COLORS.dark80
                            }}
                        >
                            <View
                                style={{
                                    height: 400,
                                    width: SIZES.width * 0.8,
                                    backgroundColor: COLORS.light,
                                    borderRadius: SIZES.radius
                                }}
                            >
                                <FlatList
                                    data={countries}
                                    keyExtractor={(item) => item.code}
                                    contentContainerStyle={{
                                        paddingHorizontal: SIZES.padding,
                                        paddingBottom: SIZES.padding,
                                    }}
                                    renderItem={({ item }) => {
                                        return (
                                            <TouchableOpacity
                                                style={{
                                                    flexDirection: 'row',
                                                    alignItems: 'center',
                                                    marginTop: SIZES.radius
                                                }}
                                                onPress={() => {
                                                    // console.log(item)
                                                    setSelectedCountry(item)
                                                    setShowCountryModal(false)
                                                }}
                                            >
                                                <Image
                                                    source={{ uri: item.flag }}
                                                    resizeMode="contain"
                                                    style={{
                                                        width: 40,
                                                        height: 30
                                                    }}
                                                />
                                                <Text style={{ flex: 1, marginLeft: SIZES.radius, ...FONTS.body3 }}>{item.name}</Text>
                                            </TouchableOpacity>
                                        )
                                    }}
                                />
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>
            </View>
        )

    }

    if (mode == "login") {
        return renderLogin(navigation)
    }
    else {
        return renderSignup()

    }
}


export default AuthContainer

const styles = StyleSheet.create({
    AuthContainer: {

        flex: 1,
        elevation: 10,
        width: SIZES.width - (SIZES.padding * 2),
        padding: SIZES.padding,
        borderRadius: SIZES.radius,
        backgroundColor: COLORS.light,
        zIndex: 1,

    },
    loginTitle: {
        width: '80%',
        lineHeight: 45,
        color: COLORS.gray,
        ...FONTS.h1,
        fontWeight: 'bold'
    },
    emailField: {
        width: 25,
        height: 25,
        marginRight: SIZES.base
    },

})