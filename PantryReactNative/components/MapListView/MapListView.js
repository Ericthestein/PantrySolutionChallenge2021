import * as React from 'react';
import {View, StyleSheet, SafeAreaView, Text, Dimensions, StatusBar} from "react-native";
import {FontAwesome5, MaterialIcons} from "@expo/vector-icons";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CustomMapView from "./CustomMapView";
import CustomListView from "./CustomListView";

const Tab = createMaterialTopTabNavigator();

const MapListView = (props) => {

    return(
        <SafeAreaView style={styles.container}>
            <Tab.Navigator>
                <Tab.Screen
                    name="map"
                    options={{
                        tabBarLabel: 'Map',
                        tabBarIcon: ({ color, size, focused }) => (
                            <MaterialIcons name="map" size={size} color={color} />
                        ),
                        title: "Map"
                    }}
                >
                    {(navProps) =>
                        <CustomMapView
                            {...navProps}
                            {...props}
                        />
                    }
                </Tab.Screen>
             
                <Tab.Screen
                    name="list"
                    options={{
                        tabBarLabel: 'List',
                        tabBarIcon: ({ color, size, focused }) => (
                            <FontAwesome5 name="list" size={size} color={color} />
                        ),
                        title: "List"
                    }}
                >
                    {(navProps) =>
                        <CustomListView
                            {...navProps}
                            {...props}
                        />
                    }
                </Tab.Screen>
            </Tab.Navigator>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
		marginTop:StatusBar.currentHeight,
        height: "100%",
        width: "100%",
        backgroundColor: "white"
    }
});

export default MapListView;