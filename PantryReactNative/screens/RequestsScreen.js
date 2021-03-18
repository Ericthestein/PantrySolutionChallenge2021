import React, {useState, useEffect} from 'react';
import MapListView from "../components/MapListView/MapListView";
import AuthenticationRequiredMessage from "../components/Authentication/AuthenticationRequiredMessage";
import AuthenticationScreen from "./AuthenticationScreen";

// TODO: get requests from database
const RequestsScreen = (props) => {
    const {authenticated, user} = props;

    const [requests, setRequests] = useState([]);

    useEffect(() => {
        if (authenticated) {
            getRequests();
        }
    }, [authenticated])

    const getRequests = () => {
        // TODO: fetch from firestore
        setRequests([]);
    }

    if (authenticated) {
        return(
            <MapListView
                data={[]}
            />
        )
    } else {
        // TODO: use stack navigator to push authentication screen to stack?
        return(
            <AuthenticationScreen />
        )
    }

}

export default RequestsScreen;