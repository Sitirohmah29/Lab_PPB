import { StatusBar } from 'expo-status-bar';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import Car from './components/Car';
import Motorcycle from './components/Motorcycle';
import Bicycle from './components/Bicycle';
import Myprofile from './components/Myprofile';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       {/* <Text>Open up App.js to start working on your app!</Text> */}
//       {/* <Car /> */}
//       {/* <Motorcycle /> */}
//       {/* <Myprofile /> */}
//       <Bicycle />
//       <StatusBar style="auto" />
//     </View>
//   );
// }

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Bicycle /> */}
      <Text>Sepeda Anak</Text>
      <Image 
      source={{
        uri: "https://i.pinimg.com/736x/9d/5b/eb/9d5beb1bcd054e97d52eaf8d2f8ed824.jpg",
      }}
      style={{width:400, height:400}}
      />
    </View>
  );
}

// export default function App() {
//   return(
//       <ImageBackground
//       source={{
//           uri: "https://cdns.klimg.com/mav-prod-resized/480x/webp/feedImage/2023/7/27/1690436761467-vyccu.jpeg",
//       }}
//       resizeMode="cover"
//       style={{flex: 11}}
//       >
//       </ImageBackground>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    // atas bawah
    justifyContent: 'center',
    // kiri kanan
  },
});
