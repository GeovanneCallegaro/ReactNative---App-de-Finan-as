import { StyleSheet, Text, View } from 'react-native';

import Header from '../../Components/Header';
import Balance from '../../Components/Balance';

const list = [
    {
        id: 1, 
        label: 'Boleto - Conta de Luz',
        value: '200,00',
        date: '17/09/2022',
        type: 0 // despesas
    },
    {
        id: 2, 
        label: 'Pix - Cliente X',
        value: '2.500,00',
        date: '17/09/2022',
        type: 1 // receita / entradas
    },
    {
        id: 3, 
        label: 'Salário',
        value: '7.000,00',
        date: '17/09/2022',
        type: 1 // receita / entradas
    },
]

export default function Home() {
    return (
        <View style={styles.container}>
            <Header name='Geovanne Callegaro'/>
            <Balance balance='9.250,80' expenses='-900,00'/>

            <Text style={styles.title}> Últimas Movimentações </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fafafa',
    },

    title: {
        fontSize: 18, 
        fontWeight: 'bold',
        marginLeft: 14, 
        marginRight: 14,
        marginTop: 14,
    }
});
