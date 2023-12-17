import { StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import React, {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from 'tailwind-react-native-classnames';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch, useSelector } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/core';
import { selectDestination, selectOrigin } from '../slices/navSlice';
import RideOptionsCard from './RideOptionsCard';
import Map from './Map';
import NavFavorites from './NavFavorites';
import { Icon } from 'react-native-elements/dist/icons/Icon';


const NavigateCard = () => {

    const dispatch = useDispatch();
    const origin = useSelector(selectOrigin);
    const destination = useSelector(selectDestination);
    const navigation = useNavigation();
    const [hideNavOptions, setHideNavOptions] = useState(false);
    console.log("state console hidenavoptions", hideNavOptions )
  return (
    <View style={tw`bg-white`}>
        
        <Text style={tw`text-center py-5 text-xl`}>Good Morning, </Text>
        <View style={tw`border-t border-gray-200 flex-shrink`}>
            <View>
                <GooglePlacesAutocomplete 
                placeholder="Where to?"
                nearbyPlacesAPI="GooglePlacesSearch"
                debounce={200}
                styles={toInputBoxStyles}
                enablePoweredByContainer={false}
                fetchDetails={true}
                query={{
                    key: 'AIzaSyCjlhkIPVQfZS4ei6mnHtsG4RCKoomxl0c',
                    language: 'en',
                }}
                onChangeText={(text) => setHideNavOptions(true)}
                returnKeyType={'search'}
                minLength={2}
                onPress={(data, details) => {
                    console.log("set destination data", data)
                    console.log("set destination details", details)
                    
                    dispatch(setDestination({
                        location: details.geometry.location,
                        description: data.description,
                    }))
                    navigation.navigate('RideOptionsCard')
                }}

                />
            </View>
        </View>
        {!hideNavOptions ? <NavFavorites /> :  null} 
        {/* <NavFavorites /> */}
        <View style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}>
            <TouchableOpacity 
            onPress={() => navigation.navigate('RideOptionsCard')}
            style={tw`flex flex-row justify-between bg-black w-24 px-4 py-3 rounded-full`}>
                <Icon name="car" type="font-awesome" color="white" size={16} />
                <Text style={tw`text-white text-center`}>Rides</Text>
            </TouchableOpacity>
            <TouchableOpacity style={tw`flex flex-row justify-between w-24 px-4 py-3 rounded-full`}>
                <Icon name="fast-food-outline" type="ionicon" color="black" size={16} />
                <Text style={tw`text-center`}>Eats</Text>
            </TouchableOpacity>
            
        </View>
    </View>
  )
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
    
    container: {
        backgroundColor: 'white',
        paddingTop: 20,
        flex: 0,
    },
    textInput: {
        backgroundColor: '#DDDDDF',
        borderRadius: 0,
        fontSize: 18,
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0,
    }
        
            
})