import * as React from 'react';
import {View, StyleSheet, Text, FlatList, SectionList, SafeAreaView} from "react-native";
//import  { userLoc }  from "PantrySolutionChallenge2021/PantryReactNative/components/MapListView/CustomMapView.js";


const renderHeaderPantries = () => {
  return (
    <View>
      <Text style = {styles.header}>Pantries</Text>
    </View>
  );
};

const renderHeaderRequests = () => {
    return (
        <View>
            <Text style = {styles.header}>Requests</Text>
        </View>
    );
};

const CustomListView = (props) => {
    const {data, onClick, dataType} = props;

    const sortByMostRecent = (data) => {
        return data.sort((a, b) => {
            if (a.timestamp > b.timestamp) {
                return -1;
            } else {
                return 1;
            }
        })
    }

    return(
        <View style={styles.container}>
            {dataType === "pantries" &&
                <FlatList
                    data={data}
                    ListHeaderComponent = {renderHeaderPantries}
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
            }

            {dataType === "requests" &&
                <FlatList
                    data={sortByMostRecent(data)}
                    ListHeaderComponent = {renderHeaderRequests}
                    renderItem={({item}) =>
                        <View style = {styles.flatlist}>
                            <Text style={styles.heading2}>{item.name}</Text>
                            <Text style={styles.subheading}>Address: {item.address}</Text>
                            <Text style={styles.subheading}>Dietary Restrictions: {item.dietaryRestrictions}</Text>
                            <Text style={styles.subheading}>Created at: {new Date(item.timestamp).toLocaleString()}</Text>
                        </View>
                    }

                    keyExtractor={(item, index) => index.toString()}
                />
            }

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