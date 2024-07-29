import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions, Button } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
import Geocoder from 'react-native-geocoding';


const MapComponent = () => {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
    const [markers, setMarkers] = useState([]);


    const data = [
        {name: 'My Dental Kids & Adult Dentistry', tel:'(781)398-0000', address:'314 Moody St, Waltham, MA 02453'},
        {name: 'Moody Street Dental On Elm', tel:'(781)894-0889', address:'52 Elm St, Waltham, MA 02453'},
        {name: 'Advanced Waltham Dental', tel:'(781)366-0411', address:'100 Maple St, Waltham, MA 02453'},
        {name: 'Dr. Taejoon Ahn', tel:'(781)647-8000', address:'225 Moody St, Waltham, MA 02453'},
        {name: 'Gentle Dental Waltham', tel:'(781)850-2361', address:'879 Main St, Waltham, MA 02451'},
        {name: 'Chris M. Karavolas, DDS', tel:'(781)790-0859', address:'20 Hope Ave # 306, Waltham, MA 02453'},
        {name: 'Newton Dentistry', tel:'(617)244-5020', address:'73 Lexington St Suite 204, Newton, MA 02466'},
        {name: 'Dr. Dayana I. Escobar, DDS', tel:'(781)693-3800', address:'564 Main St, Waltham, MA 02452'},
        {name: '376 Dental Studio: Poonam Soi, DMD', tel:'(781)373-3068', address:'376 Moody St, Waltham, MA 02453'},
        {name: 'Carmen D Brambilla', tel:'(781)899-9530', address:'695 Main St, Waltham, MA 02451'},
        {name: 'Waltham Dental Group', tel:'(781)894-2122', address:'32 South St #202, Waltham, MA 02453'},
        {name: 'Waltham Family Dental', tel:'(781)653-6211', address:'30 Grant St, Waltham, MA 02453'},
        {name: `Metrowest Children's Dentistry`, tel:'(781)373-5953', address:'520 Main St, Waltham, MA 02452'},
        {name: 'Waltham Dental Center', tel:'(781)891-7737', address:'85 River St #2, Waltham, MA 02453'},
        {name: 'Vast Dental', tel:'(617)658-7883', address:'433 Watertown St, Newton, MA 02458'},
        {name: 'Newton-Wellesley Hospital - Main Campus', tel:'(617)243-6000', address:'2014 Washington St, Newton, MA 02462'},
        {name: 'Jeffrey S. Cummings, DMD', tel:'(781)894-4114', address:'520 Main St, Waltham, MA 02452'},

    ];

    useEffect(() => {
        (async () => {
            Geocoder.init('AIzaSyDyA6j5rLUtZMxPgXAGRgTsLtMmZRQPNtI');
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location);

            const markerPromises = data.map(async (data) => {
                try {
                    const json = await Geocoder.from(data.address);
                    const location = json.results[0].geometry.location;
                    return {
                        name: data.name,
                        tel: data.tel,
                        latitude: location.lat,
                        longitude: location.lng,
                    };
                } catch (error) {
                    console.warn(error);
                    return null;
                }
            });

            const markerLocations = await Promise.all(markerPromises);
            setMarkers(markerLocations.filter(marker => marker !== null));

            //Geocoder.from(location.coords.latitude, location.coords.longitude).then(json => console.log(json));
            Geocoder.from('78 Taylor st, Waltham, 02453').then(json => console.log(json.results[0].geometry.location));

        })();
    }, []);

    let text = 'Waiting..';
    if (errorMsg) {
        text = errorMsg;
    } else if (location) {
        text = JSON.stringify(location);
    }

    return (
        <View style={styles.container}>
            {location && (
                <MapView
                    style={styles.map}
                    initialRegion={{
                        latitude: location.coords.latitude,
                        longitude: location.coords.longitude,
                        latitudeDelta: 0.06,
                        longitudeDelta: 0.03,
                    }}
                    showsUserLocation={true}
                >
                    {markers.map((marker, index) => (
                        <Marker
                            key={index}
                            coordinate={{
                                latitude: marker.latitude,
                                longitude: marker.longitude,
                            }}
                            title={marker.name}
                            description={marker.tel}
                        />
                    ))}
                </MapView>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    paragraph: {
        fontSize: 18,
        textAlign: 'center',
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height * 0.8,
    },
});

export default MapComponent;
