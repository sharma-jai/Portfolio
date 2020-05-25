import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class WorkExperience extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Work Experience</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFD0D0",
        alignItems: "center",
        justifyContent: "center"
    }
})
