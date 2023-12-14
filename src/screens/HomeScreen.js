import { SafeAreaView, View, Image} from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import RideOptionsCard from '../components/RideOptionsCard';
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch, useSelector } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/core';
import { selectDestination, selectOrigin } from '../slices/navSlice';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import NavFavorites from '../components/NavFavorites';

const HomeScreen = () => {
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
            style={{
                width: 100,
                height: 100,
                resizeMode: 'contain',
            }}

            source={{
                uri: 'https://links.papareact.com/gzs',
             }} />
            <View style={{height:200, zIndex:1}}>
            <GooglePlacesAutocomplete
                placeholder="Where From?"
                styles={{
                    container: {
                        flex: 0,
                    },
                    textInput: {
                        fontSize: 18,
                    },
                }}
                onPress={(data, details = null) => {
                  console.log('consoling data',details)
                  dispatch(setOrigin({
                        location: details.geometry.location,
                        description: data.description,
                    }))
                    dispatch(setDestination(null))
                }}
                fetchDetails={true}
                returnKeyType={'search'}
                enablePoweredByContainer={false}
                minLength={2}
                query={{
                    key: 'AIzaSyCjlhkIPVQfZS4ei6mnHtsG4RCKoomxl0c',
                    language: 'en',
                }}
                nearbyPlacesAPI="GooglePlacesSearch"
                debounce={400}
                autoFillOnNotFound={true}
                onFail={error => console.log('consoling autoplace error',error)}
        onNotFound={() => console.log('no results')}
            />

            </View>

            <NavOptions />
            <NavFavorites />



      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;


