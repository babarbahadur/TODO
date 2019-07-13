import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, TextInput } from 'react-native';
import background from "../image/Untitled-1.jpg"

import startMainTabs from "./startMainTabs";

class AuthScreen extends Component {
    loginHandler = () => {
        startMainTabs();
    }

    render () {
        return (
            <ImageBackground source={background} style={styles.backgroundStyle}>
            <View style = {styles.loginStyle}>
                <TextInput placeholder="Enter Email"></TextInput>
                <TextInput placeholder="Enter Password" secureTextEntry></TextInput>
                <Button title="Login" onPress={this.loginHandler}/>
            </View>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    backgroundStyle: {
        flex: 1
    },

    loginStyle: {
        justifyContent: "center",
        alignItems: "center",
        flex: 1
    }
})

export default AuthScreen;



