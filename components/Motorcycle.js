// react native function components
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

var name = "Honda";
// arrow function
const Motorcycle = () => {
    return (
        <View>
            <Text>Hi I'm a Motorcycle</Text>
            <Text>Merek: {name}</Text>
            <Text>Type: {types.type}</Text>
            <Text>Model: {types.model}</Text>
            <Text>Harga: {types.harga}</Text>
        </View>
    );
}

const types = {type:"Matic", model:"Vario", harga:150000};

export default Motorcycle;
