// rncc(react native components class)
import React, { Component } from 'react';
import {View, StyleSheet, Text} from 'react-native';
// import itu buat ngambil library

export class Car extends Component {
    constructor(props){
        super(props);
        this.Come2Go = this.Come2Go.bind(this);
        this.state={
            merek:"Toyota",
            types:{type:"Matic", model:"Calya ADS"}
        }
    }

    Come2Go(value) {
        return(
            <View>
                <Text>Let's go running away from duty</Text>
                <Text>With us only {value} IDR</Text>
            </View>
        )
    }

    render() {
        // render propeties mengembalikan elemen react
        return (
            <View>
                <Text>Hi, I'm a car</Text>
                <Text>Merek : {this.state.merek}</Text>
                <Text>Type : {this.state.types.type}</Text>
                <Text>Model : {this.state.types.model}</Text>
                {this.Come2Go(200000)}
            </View>
        );
    }

//     // render yg in adalah container ui
//     render() {
//         // render propeties mengembalikan elemen react
//         return (
//             <View>
//                 <View>
//                     <Text>Hi, I'm a car</Text>
//                     <Text>Merek : {this.state.merek}</Text>
//                 </View>
//                 <View>
//                     <Text>Type : {this.state.types.type}</Text>
//                     <Text>Model : {this.state.types.model}</Text>
//             </View>
//             {this.Come2Go(200000)}
//             </View>
//         );
//     }
}

const styles = StyleSheet.create({})

export default Car; 
// informasi class

// export default function App() {
//     return(
//         <SafeAreaView>
//             <Car />
//         </SafeAreaView>
//     )
// }


// hooks itu set get
// rcc mencakup semua tampilan
// rfc hanya bagian button, profil dan sebagainya
// ada 3 variabel 1. const(block scope), 2. let(block scope) 3. var(functional scope)
// block scope itu kurung kurawal {}