import React from "react";
import { StyleSheet, Text, View, SafeAreaView ,Image} from "react-native";
import tw from "twrnc";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useDispatch } from "react-redux";
import { setDestination,setOrigin } from "../slices/navSlice";
import MapScreen from "./MapScreen";
import Backforhomescreen from "../Backforhomescreen";

// import { MapContainer, TileLayer, useMap } from 'react-leaflet'

const HomeScreen = () => {

  const dispatch = useDispatch();
  return (
    <Backforhomescreen>
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-10`}>
        <Image
          style={{
            width: 50,
            height: 100,
            resizeMode: "contain",
          }}
          source={{
            uri: "https://i.pinimg.com/564x/6d/83/1a/6d831a334156291eedd036d44803c147.jpg",
          }}
        />

        <GooglePlacesAutocomplete           
           placeholder="Where to?"
           styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
           }}
           onPress={(data, details = null) => {
            dispatch(setOrigin({
              location: details.geometry.location,
              description: data.description
            }))

            dispatch(setDestination(null))
           }}
           fetchDetails={true}
           returnKeyType={"search"}
           enablePoweredByContainer={false}
           minLength={2}
           query={{
            key: 'GOOGLE_MAPS_APIKEY',
            language: 'en'
           }}
           nearbyPlacesAPI="GooglePlacesSearch"
           debounce={400}
        />

        <NavOptions/>
      </View>
    </SafeAreaView>
    </Backforhomescreen>
  );
};

export default HomeScreen;

const styles =
  StyleSheet.create[
    {
      text: {
        color: "blue",
      },
    }
  ];