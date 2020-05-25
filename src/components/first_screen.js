import React, { Component } from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'


export default class FirstScreen extends Component {
    render() {
        return (

            <View style={styles.container}>
                <View>
                    <Image style={styles.profile} source={require('../../assets/profile.jpg')} />
                </View>
                <View>
                    <Text style={styles.heading}>Jai Sharma</Text>
                </View>
                <View>
                    <Text style={styles.heading1}>A Computer Science Engineer{"\n"}     who believes to optimize{"\n"}       the complexity of code. </Text>
                </View>
                <View style={styles.ImageMove}>
                    <TouchableOpacity>
                        <Image style={styles.next} source={require('../../assets/next.png')} />
                    </TouchableOpacity>
                </View>
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
    },
    profile: {
        borderWidth: 8,
        borderColor: 'rgba(0,0,0,0.75)',
        shadowOffset: { height: 1 },
        shadowOpacity: 0.1,
        width: 200,
        height: 200,
        borderRadius: 200 / 2,
    },
    heading: {
        marginTop: 30,
        fontSize: 36,
        fontFamily: "serif",
        textShadowColor: 'rgba(0, 0, 0, 0.30)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10
    },
    heading1: {
        marginTop: 15,
        fontSize: 24,
        fontFamily: "serif",
        textShadowColor: 'rgba(0, 0, 0, 0.30)',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10
    },
    ImageMove: {
        top: 100
    },
    next: {
        width: 130,
        height: 60,
    }
})
