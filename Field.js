import React from "react";
import {  TextInput } from "react-native";

const Field = (props) => {
    return(
        <TextInput {...props} style={{borderRadius:100, color: "black", paddingHorizontal:10,width:'78%',height:'7.5%', backgroundColor:"#f5f5f5",paddingLeft:30,marginVertical:10}} placeholderTextColor= {"black"}>

        </TextInput>
    )
}


export default Field;