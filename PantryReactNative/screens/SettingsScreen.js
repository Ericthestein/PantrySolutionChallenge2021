import React, {useState, useEffect} from 'react';
import {StyleSheet, View, ScrollView, SafeAreaView} from "react-native";
import {Button} from "react-native-paper";
import * as firebase from "firebase";

const SettingsScreen = (props) => {
    const {authenticated} = props;

    const attemptLogout = () => {
        firebase.auth().signOut();
    }

    return(
        <View style={styles.container}>
            <SafeAreaView>
                <ScrollView
                    style={styles.scrollView}
                >
                    <Button
                        onPress={attemptLogout}
                        disabled={!authenticated}
                    >Logout</Button>
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        width: "100%",
        backgroundColor: "white",
    },
    scrollView: {
        height: "100%",
        width: "100%",
        backgroundColor: "white",
    }
});

export default SettingsScreen;