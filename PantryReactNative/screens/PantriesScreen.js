import React, {useState, useEffect} from 'react';
import MapListView from "../components/MapListView/MapListView";

const locations =
    [
        {title: 'Blue Ridge Area Food Bank', latitude: 38.0398044, longitude: -78.4808397, address: '1207 Harris St, Charlottesville, VA 22903', hours:'8:30AM - 4:30PM', phone:'434-296-3663'},
        {title: 'Emergecy Food Network', latitude: 38.037511, longitude: -78.483025, address: '900 Harris St.Charlottesville, VA 22903', hours:'9:00AM - 3:30PM', phone:'434-979-9180'},
        {title: 'Loaves & Fishes Food Pantry', latitude: 38.077166, longitude: -78.500304, address: '2050 Lambs Rd, Charlottesville, VA 22901', hours:'2:00PM - 4:00PM', phone:'434-996-7868'},
        {title: 'Food Distribution Center - Church of Our Saviour Episcopal', latitude: 38.06783, longitude: -78.466888, address: '1165 Rio Rd E, Charlottesville, VA 22901', hours:'8:30AM - 4:30PM', phone:'434-973-6512'},
    ];

const PantriesScreen = (props) => {
    const [pantries, setPantries] = useState([]);

    useEffect(() => {
        getPantries();
    })

    const getPantries = () => {
        // TODO: fetch from firestore
        setPantries(locations);
    }

    return(
        <MapListView
            data={pantries}
            onClick={() => {}}
        />
    )
}

export default PantriesScreen;