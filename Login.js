import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import Background from "./Background";
import Btn from "./Btn";
import Field from "./Field";
import { getDatabase, ref, child, get } from "firebase/database";
import { useState } from "react";

const Login = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const continuelogin = () => {
    const dbRef = ref(getDatabase());
    get(child(dbRef, `users/${username}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          if(password==snapshot.val().password && username== snapshot.val().username){
            alert("Logged In");
            props.navigation.popToTop();
            props.navigation.replace("MainApp");
          }
        } else {
            alert("Wrong Credentials");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <Background>
      <View style={{ alignItems: "center", width: 400 }}>
        <Text
          style={{
            color: "white",
            fontSize: 52,
            fontWeight: "bold",
            marginVertical: 60,
          }}
        >
          Login
        </Text>

        <View
          style={{
            backgroundColor: "#fee2e2",
            height: 800,
            width: 480,
            borderTopLeftRadius: 130,
            paddingTop: 100,
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 40, color: "#4b5563", fontWeight: "bold" }}>
            Welcome Back
          </Text>
          <Text
            style={{
              color: "grey",
              fontSize: 19,
              fontWeight: "bold",
              marginBottom: 20,
            }}
          >
            Login to your account
          </Text>
          <Field
            onChangeText={(value) => setUsername(value)}
            value={username}
            placeholder="Username"
            keyboardType="email-address"
          />
          <Field
            onChangeText={(value) => setPassword(value)}
            value={password}
            placeholder="Password"
            secureTextEntry={true}
          />
          <View
            style={{
              alignItems: "flex-end",
              width: "78%",
              paddingRight: 16,
              marginBottom: 200,
            }}
          >
            <Text
              style={{ color: "#1c1917", fontWeight: "bold", fontSize: 16 }}
            >
              Forgot Password
            </Text>
          </View>
          <Btn
            textcolor={"white"}
            bgColor={"#ef4444"}
            btnLabel="Log In"
            Press={() => continuelogin()}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Dont have an Account ?
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Signup")}
            >
              <Text
                style={{ color: "#ef4444", fontWeight: "bold", fontSize: 16 }}
              >
                {" "}
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({});

export default Login;
