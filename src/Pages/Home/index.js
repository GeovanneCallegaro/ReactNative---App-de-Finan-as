import { FlatList, StyleSheet, Text, View } from 'react-native';

import Header from '../../Components/Header';
import Balance from '../../Components/Balance';
import Movements from '../../Components/Movements';
import Actions from '../../Components/Actions';

const list = [
    {
        id: 1, 
        label: 'Boleto - Conta de Luz',
        value: '200,00',
        date: '10/09/2022',
        type: 0 // despesas
    },
    {
        id: 2, 
        label: 'Pix - Cliente X',
        value: '2.500,00',
        date: '20/09/2022',
        type: 1 // receita / entradas
    },
    {
        id: 3, 
        label: 'Salário',
        value: '7.000,00',
        date: '22/09/2022',
        type: 1 // receita / entradas
    },
]

export default function Home() {
    return (
        <View style={styles.container}>
            <Header name='Geovanne Callegaro'/>
            <Balance balance='9.250,80' expenses='-900,00'/>

            <Actions />

            <Text style={styles.title}> Últimas Movimentações </Text>

            <FlatList 
                style={styles.list}
                data={list}
                keyExtractor={(item) => String(item.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <Movements data={item}/>}
            />
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
        margin: 14,
    }, 

    list: {
        marginStart: 14,
        marginEnd: 14
    }
});
