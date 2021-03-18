import * as React from 'react';
import {View, StyleSheet, Text, FlatList, SectionList, SafeAreaView} from "react-native";
//import { FlatList } from 'react-native-gesture-handler';

const CustomListView = (props) => {
    const {data, onClick} = props;

    return(
        <View>
            <FlatList
                data={data}
                renderItem={({item}) => <Text>{item.title}, {item.address}, {item.hours}, {item.phone},</Text>}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
}

export default CustomListView;