import React, {useState, useEffect} from 'react';
import MapListView from "../components/MapListView/MapListView";



const locations =
    [
        {
            title: 'Blue Ridge Area Food Bank',
            location: {
                latitude: 38.0398044,
                longitude: -78.4808397,
            },
            address: '1207 Harris St, Charlottesville, VA 22903',
            hours:'8:30AM - 4:30PM',
            phone:'434-296-3663',
        },
        {
            title: 'Emergecy Food Network',
            location: {
                latitude: 38.037511,
                longitude: -78.483025
            },
            address: '900 Harris St.Charlottesville, VA 22903',
            hours:'9:00AM - 3:30PM',
            phone:'434-979-9180',
        },
        {
            title: 'Loaves & Fishes Food Pantry',
            location: {
                latitude: 38.077166,
                longitude: -78.500304
            },
            address: '2050 Lambs Rd, Charlottesville, VA 22901',
            hours:'2:00PM - 4:00PM',
            phone:'434-996-7868',
        },
        {
            title: 'Food Distribution Center - Church of Our Saviour Episcopal',
            location: {
                latitude: 38.06783,
                longitude: -78.466888
            },
            address: '1165 Rio Rd E, Charlottesville, VA 22901',
            hours:'8:30AM - 4:30PM',
            phone:'434-973-6512',
        },
        {
            title: 'Food Distribution Center - Holy Comforter Outreach',
            location: {
                latitude: 38.037094,
                longitude: -78.512128
            },
            address: '208 E Jefferson St, Charlottesville, VA 22902',
            hours:'8:30AM - 4:30PM',
            phone:'434-295-7185',
        },
        {
            title: 'The Salvation Army',
            location: {
                latitude: 38.020932,
                longitude: -78.489034
            },
            address: '207 Ridge St, Charlottesville, VA 22902',
            hours:'7:00AM - 6:30PM',
            phone:'434-295-4058',
        },

       

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