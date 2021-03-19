import * as React from 'react';
import {View, StyleSheet, Dimensions } from "react-native";
import MapView, { Marker } from 'react-native-maps';

const CustomMapView = (props) => {
    const {data, onClick} = props;

    return(
        <View style={styles.container}>
            <MapView style={styles.map}
                initialRegion={{
                    latitude: 38.0370944,
                    longitude: -78.51212799999999,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }}
            >
                {
                    data.map(marker => (
                        <Marker
                            key={marker.title}
                            coordinate = {{
                                latitude: marker.location.latitude,
                                longitude: marker.location.longitude
                            }}
                            title = {marker.title}>
                        </Marker>
                    ))
                }
            </MapView>
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