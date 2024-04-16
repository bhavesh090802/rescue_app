import React, { Children } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function Btn({ bgColor, btnLabel, textcolor,Press }) {
    return (
        <TouchableOpacity 
        onPress={Press}
        style={{ 
            backgroundColor: bgColor,
             borderRadius: 100, 
             alignItems: 'center',
             width: 350,
             paddingVertical:5,
              }}>
            <Text style={{ color: textcolor,
                 fontSize: 28,
                  fontWeight:"bold" 
                  }}>{btnLabel}</Text>
        </TouchableOpacity>

    )
}