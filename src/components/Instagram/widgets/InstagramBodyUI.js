import React from 'react';
import { View, Image, Text, TouchableOpacity, StyleSheet } from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const InstagramBodyUI = ({ items }) => {
    // Gabungkan nama pengguna (user) dengan teks caption
    const captionWithUsername = `${items.name}: ${items.caption}`;

    return (
        <View style={styles.feedItem}>
            <View style={styles.usernameContainer}>
                <Image 
                    source={items.gender === "M" ? require("../../../../assets/icons/boy.png") : require("../../../../assets/icons/girl.png")}
                    style={styles.user_ava}
                />
                <Text style={styles.name}>{items.name}</Text>
                <FontAwesome5Icon name={"ellipsis-v"} size={15} color={"white"} />
            </View>
            <Image source={{ uri: items.imageUrl }} style={styles.image} />
            <View style={styles.interactionButton}>
                <TouchableOpacity> 
                    <FontAwesome5Icon name={"heart"} color={"red"} size={23} style={styles.icon} />
                </TouchableOpacity> 
                <TouchableOpacity> 
                    <FontAwesome5Icon name={"comment"} color={"blue"} size={23} style={styles.icon} />
                </TouchableOpacity>
                <TouchableOpacity> 
                    <FontAwesome5Icon name={"paper-plane"} size={23} color={"white"} style={styles.icon}/>
                </TouchableOpacity>
            </View>
            {/* Gunakan caption yang sudah digabungkan, dan gunakan komponen Text untuk nama pengguna (user) dengan gaya tebal */}
            <Text style={styles.caption}>
                <Text style={styles.boldText}>{items.name}</Text> {items.caption}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    feedItem: {
        padding: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        marginTop: 5, 
    },
    usernameContainer: {
        padding: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
    },
    name: {
        color: 'white',
        marginLeft: 5,
        flex: 1,
        fontWeight: 'bold'
    },
    image: {
        width: '100%',
        height: 400,
        resizeMode: 'cover',
        marginBottom: 5,
    },
    caption: {
        padding: 5,
        marginBottom: 5,
        color: 'white'
    },
    boldText: {
        fontWeight: 'bold',
    },
    interactionButton: {
        padding: 5,
        borderRadius: 5,
        marginTop: 5,
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginRight: 20,    
    },
    user_ava: {
        width: 30,
        height: 30,
        borderRadius: 100,
        backgroundColor: "#f0f8ff",
        borderColor: "magenta",
        borderWidth: 2,
        marginLeft: 5,
    },
});

export default InstagramBodyUI;
