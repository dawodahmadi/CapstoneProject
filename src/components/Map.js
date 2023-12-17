
import React, { useEffect, useRef} from 'react'
import MapView, {Marker} from 'react-native-maps'
import { selectOrigin, setDestination, setOrigin } from '../slices/navSlice'
import tw from 'tailwind-react-native-classnames'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import MapViewDirections from 'react-native-maps-directions'
import {GOOGLE_MAPS_APIKEY} from '@env'
import { setTravelTimeInformation } from '../slices/navSlice'




const Map = () => {
  const origin = useSelector(selectOrigin)
  const destination = useSelector(setDestination)
  const mapRef = useRef(null)
  const dispatch = useDispatch()
  //const hasValidOriginAndDestination = origin && destination && origin.location && destination.location;

  

  useEffect(() => {
    if(!origin || !destination) return
    //if (!hasValidOriginAndDestination) return

    // Zoom & fit to markers
    mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
      edgePadding: {top: 50, right: 50, bottom: 50, left: 50}
    })
  }, [origin, destination])

  useEffect(() => {
    if(!origin || !destination) return
    //if (!hasValidOriginAndDestination) return

    const getTravelTime = async () => {
      fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?
      units=imperial&origins=${origin.description}&destinations=${destination.description}&key=${GOOGLE_MAPS_APIKEY}`)
      .then((res) => res.json())
      .then(data => {
        dispatch(setTravelTimeInformation(data.rows[0].elements[0]))
      })
    }

    getTravelTime()
  }, [origin, destination, GOOGLE_MAPS_APIKEY])

console.log('this is a string location',origin)
  return (
    <MapView
      ref={mapRef}
      style={tw`flex-1`}
      mapType="mutedStandard"
      initialRegion={{
        latitude: origin?.location?.lat,
        longitude: origin?.location?.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005
      }}
    >
      {origin && destination && (
        <MapViewDirections
          origin={origin.description}
          destination={destination.description}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={3}
          strokeColor="black"
        />
      )}

      {origin?.location && (
        <Marker 
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng
          }}
          title="Origin"
          description={origin.description}
          identifier="origin"
        />
      )}

      {destination?.location && (
        <Marker 
          coordinate={{
            latitude: destination.location.lat,
            longitude: destination.location.lng
          }}
          title="Destination"
          description={destination.description}
          identifier="destination"
        />
      )}
    </MapView>


  )
}

export default Map

