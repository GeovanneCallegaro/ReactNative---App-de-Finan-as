import { AntDesign } from '@expo/vector-icons';
import React, { useState } from 'react';
import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


export default function ModalView({ visibleModal }) {
    const [number, setValueNumber] = useState(0);

    return (
        <View style={styles.container}>
            <Modal
                animationType='slide'
                transparent={true}
                visible={visibleModal}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.textContainer}>
                        <Text style={styles.textModal}> De quanto foi a sua entrada? </Text>
                    </View>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.input}
                            onChangeText={setValueNumber}
                            value={number}
                            placeholder='R$ 0,00'
                            keyboardType='numeric'
                        />
                    </View>
                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity style={styles.closeButton}>
                            <AntDesign name='close' size={26} color='#000' />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.successButton}>
                            <AntDesign name='check' size={26} color='#FFF' />
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 22,
    },

    modalContainer: {
        backgroundColor: 'white',
        height: '95%',
        zIndex: 1000,
        marginTop: '15%',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30
    },

    textContainer: {
        paddingTop: 20,
        paddingLeft: 10
    },

    textModal: {
        fontSize: 24,
        fontWeight: 'bold',
    },

    inputContainer: {
        marginTop: 20,
        paddingLeft: 20
    },

    input: {
        width: '80%',
        border: 'none',
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        fontSize: 20,
        color: '#000',
        paddingBottom: 2,
    },

    buttonsContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 300
    },

    closeButton: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#FFF',
        borderRadius: 40,
        shadowColor: '#000',
        elevation: 5,
        marginRight: 70
    },

    successButton: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#8000ff',
        borderRadius: 40,
        shadowColor: '#000',
        elevation: 5,
    }
})