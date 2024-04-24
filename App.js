// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from '@react-navigation/native';

// export default function App() {
//   const Stack = createNativeStackNavigator();
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//         name='Page1'
//         component={Page1}
//         options={{ title: 'Welcome'}}
//         />
//         <Stack.Screen name='Page2' component={Page2}/>
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }
// const Page1 = ({navigation}) => {
//   return(
//     <TouchableOpacity
//     onPress={() => navigation.navigate('Page2', {name: 'Rohmah'})}
//     >
//       <View
//       style={{
//         backgroundColor: 'purple',
//         padding: 10,
//         borderRadius: 10,
//         margin: 10,
//       }}
//       >
//         <Text style={{color:'white', textAlign: 'center',}}>Click Here!</Text>
//       </View>
//     </TouchableOpacity>
//   );
// }

// const Page2 = ({navigation, route}) => {
//   return <Text>This is {route.params.name}'s Profile</Text>;
// };


export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer> 
    <Tab.Navigator>
      <Tab.Screen name="Page1" component={Page1}/>
      <Tab.Screen name="Page2" component={Page2}/>
    </Tab.Navigator>
    </NavigationContainer>
  );
}

const Page1 = () => {
    return <Text>Page1</Text>
}

const Page2 = () => {
  return <Text>Page2</Text>;
};
