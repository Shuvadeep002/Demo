import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StaticColors } from '../constants/StaticColors'
import { StaticText } from '../constants/StaticText'

export default function HeaderTag({ topText, bottomText, color, image }:
    { topText: string, bottomText: string, color: string, image: any }) {
    return (
        <View style={styles.mainContainer}>
            {image}
            <Text style={styles.topText}>{topText}</Text>
            <View style={phoneTextContainer(color)}>
                <Text style={styles.phoneNoText}>{StaticText.PhoneNumber}</Text>
            </View>
            <Text style={styles.bottomText}>{bottomText}</Text>
        </View>
    )
}

const phoneTextContainer = (color: string) => ({
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 30,
    backgroundColor: color,
    transform: [{ rotate: '-3 deg' }],
    marginVertical: 10,
    elevation: 3
})
const styles = StyleSheet.create({

    mainContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    phoneNoText: {
        fontSize: 27
    },
    subContainer: {
        height: 100
    },
    topText: {
        fontSize: 18,
        fontWeight: '600',
        color: StaticColors.black
    },
    bottomText: {
        fontSize: 12,
        fontWeight: '500',
        color: StaticColors.black2
    },

})