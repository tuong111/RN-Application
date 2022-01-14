import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Home(props) {
    

    return (
        <View>
            <Text style = {styles.baseText}>
                <Text style = {styles.titleText}>Hello React Native Application</Text>
            </Text>
        </View>

    )
}

const styles = StyleSheet.create({
    baseText: {
      fontFamily: "Cochin"
    },
    titleText: {
      fontSize: 20,
      fontWeight: "bold"
    }
  });

