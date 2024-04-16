import React, { children } from "react";
import { View,StyleSheet, ImageBackground } from "react-native";

const Backforhomescreen = ({children}) => {
    return(
        <View>
            <ImageBackground source={require("./assets/bg3.jpg") } style={{ height: '100%' }}/>
            <View style={{position:"absolute"}}>
                {children}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({})

export default Backforhomescreen;