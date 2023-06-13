import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { app, database } from "../../firebaseConfig";
import { get, ref } from "firebase/database";
import LocationMap from './LocationMap';

const LocationComponent = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const retrieveUserId = async () => {
      try {
        // Retrieve the userId from AsyncStorage
        const userId = await AsyncStorage.getItem('userId');
        if (userId !== null) {
          // Create a reference to the location in the Firebase database
          const locationRef = ref(database, `locations/${userId}/location`);

          // Fetch the location data once
          get(locationRef)
            .then((snapshot) => {
              if (snapshot.exists()) {
                const location = snapshot.val();
                setLatitude(location.latitude);
                setLongitude(location.longitude);
                // Do something with the location data
              } else {
                console.log('Location does not exist');
                // Handle the case where the location doesn't exist
              }
              setLoading(false); // Set loading to false after fetching the location data
            })
            .catch((error) => {
              console.log('Error fetching location data:', error);
              // Handle the error case
              setLoading(false); // Set loading to false in case of error
            });
        } else {
          console.log('userId not found in AsyncStorage');
          // Handle the case where userId is not found in AsyncStorage
          setLoading(false); // Set loading to false if userId is not found
        }
      } catch (error) {
        console.log('Error retrieving userId from AsyncStorage:', error);
        // Handle the error case
        setLoading(false); // Set loading to false in case of error
      }
    };

    retrieveUserId();
  }, []);

  if (loading) {
    // Render a loading indicator while fetching the location data
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      {latitude && longitude ? (
        <LocationMap latitude={latitude} longitude={longitude} />
      ) : (
        <View>
          {/* Render a placeholder or error message if latitude and longitude are still null */}
        </View>
      )}
    </View>
  );
};

export default LocationComponent;
