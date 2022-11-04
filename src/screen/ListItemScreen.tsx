import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native';
import Item from '../components/item';


const ListItemScreen = () => {
    const [items, setItems] = useState([]);
    const getItems = async () => {
        const response = await fetch("https://rickandmortyapi.com/api/character");
        const data = await response.json();
        setItems(data.results);
    };

    useEffect(() => {
        getItems();
    }, [items]);

    return (
        <View style={styles.container}>
            <FlatList
                data={items}
                renderItem={({item}) => <Item character={item}/>}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default ListItemScreen

