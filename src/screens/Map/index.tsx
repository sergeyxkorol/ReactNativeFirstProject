import React, {FC, useEffect, useState} from 'react';
import {View, PermissionsAndroid} from 'react-native';
import Geolocation from 'react-native-geolocation-service';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import {
  DEFAULT_COORDS,
  LATITUDE_DELTA,
  LONGITUDE_DELTA,
  MAX_AGE,
  TIMEOUT,
} from '../../constants';
import styles from './styles';

const Map: FC = () => {
  const [region, setRegion] = useState(DEFAULT_COORDS);

  useEffect(() => {
    const bootstrapAsync = async () => {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'MyApp Permission',
            message:
              'This App needs access to your geolocation ' +
              'so you can the map.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          Geolocation.getCurrentPosition(
            position =>
              setRegion({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
              }),
            error => {
              // ToDo: show user error
              console.error(error.code, error.message);
            },
            {enableHighAccuracy: true, timeout: TIMEOUT, maximumAge: MAX_AGE},
          );
        } else {
          // ToDo: show user error
          console.log('Geolocation permission denied');
        }
      } catch (err) {
        // ToDo: show user error
        console.warn(err);
      }
    };

    bootstrapAsync();
  }, []);

  return (
    <View style={styles.container}>
      <MapView provider={PROVIDER_GOOGLE} style={styles.map} region={region}>
        <Marker
          coordinate={{latitude: region.latitude, longitude: region.longitude}}
        />
      </MapView>
    </View>
  );
};

export default Map;
