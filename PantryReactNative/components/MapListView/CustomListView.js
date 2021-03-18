import * as React from 'react';
import {View, StyleSheet, Text, FlatList, SectionList, SafeAreaView} from "react-native";
//import { FlatList } from 'react-native-gesture-handler';

const CustomListView = () => {

    return(
        <View>
            <FlatList
                data={[
                    {title: 'Blue Ridge Area Food Bank', address: '1207 Harris St, Charlottesville, VA 22903', hours:'8:30AM - 4:30PM', phone:'434-296-3663'},
                    {title: 'Emergecy Food Network', address: '900 Harris St.Charlottesville, VA 22903', hours:'9:00AM - 3:30PM', phone:'434-979-9180'},
                    {title: 'Loaves & Fishes Food Pantry', address: '2050 Lambs Rd, Charlottesville, VA 22901', hours:'2:00PM - 4:00PM', phone:'434-996-7868'},
                    {title: 'Food Distribution Center - Church of Our Saviour Episcopal', address: '1165 Rio Rd E, Charlottesville, VA 22901', hours:'8:30AM - 4:30PM', phone:'434-973-6512'},
                    ]}
                    renderItem={({item}) => <Text>{item.title}, {item.address}, {item.hours}, {item.phone},</Text>}
                    keyExtractor={(item, index) => index.toString()}
                    
                    
            />
        </View>
    );
}

export default CustomListView;