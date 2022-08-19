import { Feather } from '@expo/vector-icons';
import React from 'react';
import {
    StatusBar, StyleSheet,
    Text, TouchableOpacity, View
} from 'react-native';

const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 5 : 30;

export default function Header() {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.username}>Geovanne Callegaro</Text>

                <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
                    <Feather name="user" size={27} color="#FFF" />
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#8000ff',
        paddingTop: statusBarHeight,
        flexDirection: 'row',
        paddingStart: 16,
        paddingEnd: 16, 
        paddingBottom: 44
    },
    content: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    username: {
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold'
    },
    buttonUser: {
        width: 44,
        height: 44,
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 44 / 2,
    }
})