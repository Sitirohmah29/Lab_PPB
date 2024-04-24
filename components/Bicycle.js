import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

// function expresion
// function Bicycle  () {
//     return (
//         <View>
//             <Text>Hi, I'm a Bicycle</Text>
//             <TakeARide />
//             {/* buat arrow function */}
//             {Place2Go()}
//             {/* buat expresion function */}
//         </View>
//     );
// }

// // const styles = StyleSheet.create({})

// export default Bicycle;

// const TakeARide = () =>{
//     return <Text>Let's go riding with me</Text>
// };

// function Place2Go(){
//     return <Text>We'r going to south west now, come on</Text>
// };


function Bicycle(){
    const city = "Bogor";
    const peoples = [{name:"Siti Rohmah", fams:"sister"}, {name:"Heriyadi", fams:"bro"}]
    return (
        <View>
            <Text>hi im bicycle</Text>
            <TakeARide peoples={peoples}/>
            {Place2Go(city)}
        </View>
    );
}

const styles = StyleSheet.create({})

export default Bicycle;

const TakeARide = ({peoples}) =>{
    return (
        <View>
            <Text>Lets go riding with us: </Text>
            {peoples.map((v, index)=>(
                <View key ={index}>
                    <Text>{v.name} / my {v.fams}</Text>
                </View>
            ))}
        </View>
    )
};

function Place2Go(value) {
    return <Text>we're going to {value} now, come on.</Text>;
}