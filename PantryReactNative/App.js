import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainTabsNavigator from "./screens/MainTabsNavigator";
import * as firebase from 'firebase';

// Optionally import the services that you want to use
//import "firebase/auth";
//import "firebase/database";
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyC6Q5CG2drQx4e6vq1eo63AHNptBAcu-S8",
    authDomain: "pantry-pals-dfd49.firebaseapp.com",
    projectId: "pantry-pals-dfd49",
    storageBucket: "pantry-pals-dfd49.appspot.com",
    messagingSenderId: "621498102154",
    appId: "1:621498102154:web:2878498ccd22fa7bfc5873"
};

export default function App() {
    const [authenticated, setAuthenticated] = useState(false);
    const [user, setUser] = useState(null)

    useEffect(() => {
        initializeFirebase();
        listenForAuthenticationChange();
    })

    const initializeFirebase = () => {
        if (!firebase.apps.length) {
            firebase.initializeApp(firebaseConfig);
        }
    }

    const listenForAuthenticationChange = () => {
        // Listen for firebase authentication state to change
        firebase.auth().onAuthStateChanged((localFirebaseUser) => {
            if (localFirebaseUser != null) {
                console.log("FIREBASE: Authenticated");
                setAuthenticated(true);
                setUser(localFirebaseUser)
            } else {
                console.log("FIREBASE: Logged out");
                setAuthenticated(false);
                setUser(null);
            }
        })
    }

    return (
        <View style={styles.container}>
            <MainTabsNavigator
                authenticated={authenticated}
                user={user}
            />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%"
    },
});
