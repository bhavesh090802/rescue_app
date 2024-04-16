import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import MainApp from "./MainApp";

import HomeScreen from "./screens/HomeScreen";
//new imports
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import MapScreen from "./screens/MapScreen";
import { initializeApp } from "firebase/app";

const Stack = createNativeStackNavigator();

function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyDKNBMI85wFwqBImk-r_TkKT5yymTVWZKg",
    authDomain: "test-3ea37.firebaseapp.com",
    databaseURL:
      "https://test-3ea37-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "test-3ea37",
    storageBucket: "test-3ea37.appspot.com",
    messagingSenderId: "414068017105",
    appId: "1:414068017105:web:8c6f1a37fc2159118702f0",
    measurementId: "G-K6C5Y6V1XF",
  };

  const app = initializeApp(firebaseConfig);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="MainApp" component={MainApp} />
        <Stack.Screen name="MapScreen" component={MapScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
