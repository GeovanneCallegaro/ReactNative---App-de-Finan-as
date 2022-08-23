import React, { useState } from "react";
import {
    ScrollView, StyleSheet, Text, TouchableOpacity, View
} from 'react-native';

import { AntDesign } from '@expo/vector-icons';

import ModalView from "../Modal";

export default function Actions({ onChangeBalance }) {
    const [visibleModal, setVisibleModal] = useState(false);
    const [value, setValue] = useState(0)

    const onChangeModalVisibility = () => {
        setVisibleModal(!visibleModal);
        setValue(0);
    }

    return (
        <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
            <ModalView 
                visibleModal={visibleModal} 
                onChangeModalVisibility={onChangeModalVisibility}
                onChangeBalance={onChangeBalance}
                value={value}
                setValue={setValue}
            />

            <TouchableOpacity style={styles.actionButton} onPress={() => onChangeModalVisibility()}>
                <View style={styles.areaButton}>
                    <AntDesign name='addfolder' size={26} color='#000' />
                </View>
                <Text style={styles.labelButton}>Entradas</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <AntDesign name='tagso' size={26} color='#000' />
                </View>
                <Text style={styles.labelButton}>Compras</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <AntDesign name='creditcard' size={26} color='#000' />
                </View>
                <Text style={styles.labelButton}>Cartão de Crédito</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <AntDesign name='barcode' size={26} color='#000' />
                </View>
                <Text style={styles.labelButton}>Boletos</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.actionButton}>
                <View style={styles.areaButton}>
                    <AntDesign name='setting' size={26} color='#000' />
                </View>
                <Text style={styles.labelButton}>Conta</Text>
            </TouchableOpacity>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        maxHeight: 84,
        marginBottom: 14,
        marginTop: 18,
        paddingEnd: 14,
        paddingStart: 14
    },

    actionButton: {
        alignItems: 'center',
        marginRight: 32
    },

    areaButton: {
        backgroundColor: '#ecf0f1',
        height: 60,
        width: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },

    labelButton: {
        marginTop: 4,
        textAlign: 'center',
        fontWeight: 'bold'
    }
})