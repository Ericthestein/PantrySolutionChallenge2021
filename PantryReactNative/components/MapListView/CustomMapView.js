import * as React from 'react';
import {View, StyleSheet, Dimensions } from "react-native";
import MapView from 'react-native-maps';

const CustomMapView = () => {

    return(
        <View style={styles.container}>
            <MapView style={styles.map} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%"
    },
    map: {
        flex: 1,
        width: "100%"
    }
})

export default CustomMapView;