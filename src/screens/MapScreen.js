import { TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements/dist/icons/Icon'
import tw from 'tailwind-react-native-classnames'
import Map from '../components/Map'
import NavigateCard from '../components/NavigateCard';
import { useNavigation } from '@react-navigation/core';

import { createStackNavigator } from '@react-navigation/stack';
import RideOptionsCard from '../components/RideOptionsCard';




const MapScreen = () => {
    
  const Stack = createStackNavigator();
  const navigation = useNavigation();

  return (
    <View>
        <TouchableOpacity
        onPress={() => navigation.navigate("HomeScreen")}
        className="bg-gray-100 absolute top-16 left-8 z-50 p-3 rounded-full"
      >
        <Icon name="menu" />
      </TouchableOpacity>
        <View style={tw`h-1/2`}>
            <Map />
        </View>
        <View style={tw`h-1/2`}>
            <Stack.Navigator>
                <Stack.Screen name="NavigateCard" component={NavigateCard} options={{ headerShown: false }} />
                <Stack.Screen name="RideOptionsCard" component={RideOptionsCard} options={{ headerShown: false }} />
            </Stack.Navigator>
        </View>
    </View>

  )
}

export default MapScreen

