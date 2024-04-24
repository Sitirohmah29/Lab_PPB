import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

// var name = "Siti Rohmah";
const Myprofile = () => {
    return (
        <View>
            <Text>Myprofile</Text>
            <Text>Nama: {types.name}</Text>
            <Text>NPM: {types.npm}</Text>
            <Text>Kelas: {types.kelas}</Text>
            <Text>Umur: {types.usia}</Text>
            <Text>Tempat Tanggal Lahir: {types.ttl}</Text>
            <Text>Asal Sekolah: {types.univ}</Text>
        </View>
    );
}

const types = {name:"Siti Rohmah", npm:"222310054", kelas:"TI-22-PB", usia:"21 Tahun", ttl:"Bogor, 29 Agustus 2003", univ:"Institut Bisnis Informatika Kesatuan"};
// types itu object name itu key siti itu value
export default Myprofile;
