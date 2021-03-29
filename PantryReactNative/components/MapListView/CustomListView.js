import * as React from 'react';
import {View, StyleSheet, Text, FlatList, SectionList, SafeAreaView} from "react-native";
//import  { userLoc }  from "PantrySolutionChallenge2021/PantryReactNative/components/MapListView/CustomMapView.js";


renderHeader = () => {
  return (
    <View>
      <Text style = {styles.header}>Pantries</Text>
    </View>
  );
};

const CustomListView = (props) => {
    const {data, onClick} = props;

    return(
        <View style={styles.container}>
            <FlatList
                data={data}
                ListHeaderComponent = {renderHeader}
                renderItem={({item}) => 
                <View style = {styles.flatlist}>
                  <Text style={styles.heading2}>{item.title}</Text>
                  <Text style={styles.subheading}>Address: {item.address}</Text>
                  <Text style={styles.subheading}>Hours: {item.hours}</Text>
                  <Text style={styles.subheading}>Phone: {item.phone}</Text>
                </View>
                }

                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header:{
    fontSize:30,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  flatlist:{
    paddingVertical:10,
  },
  heading2:{
    fontSize: 30,
  },
  subheading:{
    fontSize:18,
    color: 'grey',
  },
  itemSeparator: {
    backgroundColor: 'green',
    height: 1,
  }
})
export default CustomListView;