import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import {Provider} from "react-redux";
import HomeScreen from "./screens/HomeScreen";
import MapScreen from "./screens/MapScreen";
import {store} from "./store";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// 1) Set up redux

export default function MainApp(){
  const Stack = createNativeStackNavigator();
  return (
        <Provider store={store}>
          <SafeAreaProvider>
            <Stack.Navigator>
              <Stack.Screen name="HomeScreen" component={HomeScreen} options={{headerShown:false}}/>
              <Stack.Screen name="MapScreen" component={MapScreen} options={{headerShown:false}}/>
            </Stack.Navigator>
          </SafeAreaProvider>
        </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});