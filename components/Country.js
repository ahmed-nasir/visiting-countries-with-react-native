import { View, Text, Image } from 'react-native'
import React from 'react'
export default function Country({ country, index }) {

    return (
        <View>
            <Text
                style={{ fontSize: 20 }}
            >{index + 1}. {country.name.common}</Text>
            <Image
                source={{
                    uri: country.flags.png
                }}
                style={{ width: 200, height: 200 }}></Image>
        </View>
    )
}

