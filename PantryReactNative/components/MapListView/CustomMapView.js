import * as React from 'react';
import {View, StyleSheet, Dimensions, Alert } from "react-native";
import MapView, { Marker } from 'react-native-maps';
import * as Permissions from 'expo-permissions';
import * as Location from 'expo-location';
import { useState, useEffect } from 'react';

const CustomMapView = (props) => {

    const {data, onClick} = props;
    const [location, setLocation] = useState({
        coords: {
            latitude: 38.0398044,
            longitude: -78.4808397
        }
    });
    const [errorMsg, setErrorMsg] = useState(null);
  
    useEffect(() => {
      (async () => {
        let { status } = await Location.requestPermissionsAsync();
        if (status !== 'granted') {
          setErrorMsg('Permission to access location was denied');
          return;
        }
  
        let location = await Location.getLastKnownPositionAsync({});
        setLocation(location);
      })();
    }, []);
  
    let text = 'Waiting..';
    if (errorMsg) {
      text = errorMsg;
    } else if (location) {
      text = JSON.stringify(location);

    }
    console.log(text);
    return(
        <View style={styles.container}>
            <MapView style={styles.map}
                initialRegion={{
                    latitude: location.coords.latitude,
                    longitude: location.coords.longitude,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                  }}
            >
                <Marker
                    key = 'you'
                    coordinate = {{
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude
                    }}
                    title='You are here'>
                </Marker>
        
                {
                    data.map(marker => (
                        <Marker
                            key={marker.title}
                            coordinate = {{
                                latitude: marker.location.latitude,
                                longitude: marker.location.longitude
                            }}
                            image={require('./customPin2.png')}
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