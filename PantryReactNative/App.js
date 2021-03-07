import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainTabsNavigator from "./screens/MainTabsNavigator";

export default function App() {
    return (
        <View style={styles.container}>
            <MainTabsNavigator />
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
