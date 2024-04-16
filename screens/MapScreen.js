import React, {useState, useEffect} from 'react';
import tw from "twrnc";
import MapView,{Marker} from 'react-native-maps';
import { StyleSheet, View, Button, Dimensions,Text, KeyboardAvoidingView, TouchableWithoutFeedback, Platform } from 'react-native';
import * as Location from 'expo-location';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NavigateCard from './NavigateCard';
import RideOptionsCard from './RideOptionsCard';
import { Keyboard } from 'react-native';
import Btn from '../Btn';
import { getDatabase, ref, set } from "firebase/database";

export default function MapScreen() {
  const Stack = createNativeStackNavigator();
  const [mapRegion, setMapRegion ] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const userLocation = async() => {
    
    let {status} = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted'){
      setErrorMsg('Permission to access Location was denied');
    }
    let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
    setMapRegion({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
  }

  useEffect(() => {
    userLocation();
  }, []);

  const locationfunc = () => {
    const db = getDatabase();
    set(ref(db, "location"), mapRegion).then(() => {
      alert("Connected Successfully");
      console.log(mapRegion.latitude, mapRegion.longitude);
    });
  };
  return (
    <KeyboardAvoidingView 
    behavior={Platform.OS ==="ios" ? "padding":"height"}
    style={tw`h-3/4`}>
      
      <MapView style={styles.map} 
      region={mapRegion}>
      <Marker coordinate={mapRegion} title='Current Location'/>
      </MapView>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={tw`h-1/1`}>
      <Btn
            textcolor={"white"}
            bgColor={"#ef4444"}
            btnLabel="Sign Up"
            Press={() => locationfunc()}
          />
      </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor :'#fff',
    alignItems:'center',
    justifyContent: 'center'
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
