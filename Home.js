import React from "react";
import { View,StyleSheet, Text} from "react-native";
import Background from "./Background";
import Btn from "./Btn";

const Home = (props) => {
    return(
        <Background>
            <View style={{ marginHorizontal: 40, marginVertical: 100}}>
               <Text style={{color: '#0c0a09',fontSize:60}}>Let's Start</Text>
               <Text style={{color: 'black',fontSize:60}}>Saving</Text>
               <Text style={{color: '#fff1f2',fontSize:60,marginBottom:370}}>People</Text>
               <Btn bgColor={'#fee2e2'} textcolor='#dc2626' btnLabel="Login" Press={()=>  props.navigation.navigate("Login")}/>
               <Btn bgColor={'#f43f5e'} textcolor='white' btnLabel="Sign Up" Press={()=>  props.navigation.navigate("Signup")}/>
            </View>
        </Background>
    );
}

const styles = StyleSheet.create({})

export default Home;