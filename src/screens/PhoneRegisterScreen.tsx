import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useRef, useState } from 'react'
import { StaticColors } from '../constants/StaticColors'
import BackHeader from '../components/BackHeader'
import HeaderTag from '../components/HeaderTag'
import { StaticText } from '../constants/StaticText'
import PhoneInput from 'react-native-phone-number-input'

export default function PhoneRegisterScreen() {
    const phoneInput = useRef<PhoneInput>(null);
    const [value, setValue] = useState("");
    const [formattedValue, setFormattedValue] = useState("");

    return (
        <View style={styles.mainContainer}>
            <BackHeader />
            <HeaderTag
                image={
                    <Image
                        style={styles.image}
                        source={require('../assets/images/mobile.png')} />
                }
                topText={StaticText.EnterYour}
                bottomText={StaticText.WewillsendyouOTP}
                color={StaticColors.pink}
            />
            <View style={styles.phoneInputContainer}>
                <View style={styles.imageContianer}>
                    <Image
                        style={styles.userImage}
                        source={require('../assets/images/user.png')} />
                </View>
                <PhoneInput
                    ref={phoneInput}
                    defaultValue={value}
                    defaultCode="IN"
                    layout="second"
                    onChangeText={(text) => {
                        setValue(text);
                    }}
                    onChangeFormattedText={(text) => {
                        setFormattedValue(text);
                    }}
                    textInputStyle={{
                        height: 30,
                        padding: 0,
                        width: 50,
                    }}
                    containerStyle={{
                        padding: 0,
                        backgroundColor: StaticColors.white,
                        width: 300,
                        height: 30
                    }}
                    codeTextStyle={{ fontSize: 15 }}
                    withDarkTheme
                    autoFocus
                />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        padding: 15,
        backgroundColor: StaticColors.blue
    },
    image: {
        height: 100,
        width: 100,
        resizeMode: 'contain'
    },
    phoneInputContainer: {
        backgroundColor: StaticColors.white,
        borderRadius: 50,
        padding: 10,
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    userImage: {
        height: 30,
        width: 30
    },
    imageContianer: {
        backgroundColor: 'rgba(0,0,0,0.2)',
        borderRadius: 50,
        padding: 10
    }
})