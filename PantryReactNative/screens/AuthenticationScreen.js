import React, {useState, useEffect} from 'react';
import {StyleSheet, View} from "react-native";
//import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import AuthenticationHomeScreen from "../components/Authentication/AuthenticationHomeScreen";
import AuthenticationLoginScreen from "../components/Authentication/AuthenticationLoginScreen";
import AuthenticationSignUpScreen from "../components/Authentication/AuthenticationSignUpScreen";

const Stack = createStackNavigator();

const AuthenticationScreen = (props) => {

    return(
        <Stack.Navigator initialRouteName="Authentication">
            <Stack.Screen name="Authentication" component={AuthenticationHomeScreen} />
            <Stack.Screen name="Login" component={AuthenticationLoginScreen} />
            <Stack.Screen name="Sign Up" component={AuthenticationSignUpScreen} />
        </Stack.Navigator>
    )
}

/*
<NavigationContainer>

        </NavigationContainer>
 */

export default AuthenticationScreen;