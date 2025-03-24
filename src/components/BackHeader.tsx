import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { StaticText } from '../constants/StaticText'
import { StaticColors } from '../constants/StaticColors'
import {
    useNavigation,
} from '@react-navigation/native';

export default function BackHeader({ showResend }: { showResend?: boolean }) {
    const navigation = useNavigation()

    const handelBack = () => {
        if (navigation.canGoBack()) {
            navigation.goBack()
        }
    }
    return (
        <View style={styles.mainContainer}>
            <TouchableOpacity onPress={() => { handelBack() }}>
                <Image
                    source={require('../assets/images/back.png')}
                    style={styles.imageStyle}
                />
            </TouchableOpacity>
            {showResend &&
                <View style={styles.recentBtnContainer}>
                    <Text style={styles.secText}>34s</Text>
                    <TouchableOpacity>
                        <Text style={styles.resendText}>{StaticText.Resend}</Text>
                    </TouchableOpacity>
                </View>}
        </View>
    )
}

const styles = StyleSheet.create({
    imageStyle: {
        height: 30,
        width: 30,
        resizeMode: 'contain'
    },
    mainContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    recentBtnContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    resendText: {
        fontSize: 15,
        color: StaticColors.black,
        textDecorationLine: 'underline',
        marginLeft: 5
    },
    secText: {
        fontSize: 15,
        color: StaticColors.blue,
    }
})