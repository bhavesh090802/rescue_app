import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Background from "./Background";
import Btn from "./Btn";
import Field from "./Field";
import { getDatabase, ref, set } from "firebase/database";

const Signup = (props) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const continuereg = () => {
    const db = getDatabase();
    // const dd = new Date().getTime();
    set(ref(db, "users/" + username), {
      email: email,
      name: name,
      username: username,
      phone: phone,
      password: password,
    }).then(() => {
      alert("Account Created");
      props.navigation.navigate("Login");
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
            marginVertical: 30,
            marginBottom: 0,
          }}
        >
          Register
        </Text>

        <Text
          style={{
            color: "#cbd5e1",
            fontSize: 19,
            fontWeight: "bold",
            marginBottom: 60,
          }}
        >
          Create a new Account
        </Text>

        <KeyboardAvoidingView
        behavior={Platform.OS ==="ios" ? "padding":"height"}
          style={{
            backgroundColor: "#fee2e2",
            height: 800,
            width: 480,
            borderTopLeftRadius: 170,
            paddingTop: 50,
            alignItems: "center",
            
          }}
        >
          <Field
            onChangeText={(value) => setName(value)}
            value={name}
            placeholder="Name"
          />
          <Field
            onChangeText={(value) => setUsername(value)}
            value={username}
            placeholder="Username"
          />
          <Field
            onChangeText={(value) => setEmail(value)}
            value={email}
            placeholder="Email"
            keyboardType="email-address"
          />
          <Field
            onChangeText={(value) => setPhone(value)}
            value={phone}
            placeholder="Phone Number"
          />
          <Field
            onChangeText={(value) => setPassword(value)}
            value={password}
            placeholder="Password"
            secureTextEntry={true}
          />
          {/* <Field placeholder="Confirm Password" secureTextEntry={true} /> */}
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              width: "78%",
              paddingRight: 1,
              paddingTop: 20,
            }}
          >
            <Text>By signing in, you are agree to our </Text>
            <Text style={{ color: "red", fontWeight: "bold", fontSize: 16 }}>
              Terms & Conditions
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              width: "78%",
              justifyContent: "center",
              paddingRight: 16,
              marginBottom: 30,
            }}
          >
            <Text>and </Text>
            <Text style={{ color: "red", fontWeight: "bold", fontSize: 16 }}>
              Privacy Policy.
            </Text>
          </View>
          <Btn
            textcolor={"white"}
            bgColor={"#ef4444"}
            btnLabel="Sign Up"
            Press={() => continuereg()}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Already have an Account ?
            </Text>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Login")}
            >
              <Text
                style={{ color: "#ef4444", fontWeight: "bold", fontSize: 16 }}
              >
                {" "}
                Login
              </Text>
            </TouchableOpacity>
          </View>
          </KeyboardAvoidingView>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({});

export default Signup;
