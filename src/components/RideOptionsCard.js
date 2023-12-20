import { SafeAreaView,  Image, Text, View } from 'react-native'
import React, {useState} from 'react'
import tw from 'tailwind-react-native-classnames'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler'
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';


import { selectTravelTimeInformation } from '../slices/navSlice';


const data = [{
    id: 'uber-x-123',
    title: 'Taxi Regular',
    multiplier: 1,
    image: 'https://links.papareact.com/3pn',

  },

    {
        id: 'uber-x-456',
        title: 'Taxi Large',
        multiplier: 1.2,
        image: 'https://links.papareact.com/5w8',
    
        },
    
        {
        id: 'uber-x-789',
        title: 'TAXI LUX',
        multiplier: 1.75,
        image: 'https://links.papareact.com/7pf',
    
        },
];

const SURGE_CHARGE_RATE = 1.5;
  
const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  
  const travelTimeInformation = useSelector(selectTravelTimeInformation)
  console.log("travelTimeInformation", travelTimeInformation);
  const onSelectRide = (item) => { 
    console.log("item", item);
    setSelected(item)
    const body = {
        travelTimeInformation: travelTimeInformation,
        selected: item,
    }
    navigation.navigate('PaymentScreen', {
      ride: body,
    })
  }
  
    return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
        <View style={{  flexDirection: 'row', alignItems: "center"}}>
            <TouchableOpacity 
            onPress={() => navigation.goBack()}
            //onPress={() => navigation.navigate('NavigateCard')} 
            style={{left: 5}}
            // style={tw`absolute top-3 left-5 p-3 rounded-full bg-red-500`}
            >
                <Icon name="chevron-left" type="fontawesome" />
            </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl left-20`}>Select a Ride - {travelTimeInformation?.distance?.text}</Text>
        </View>
        

        <FlatList 
        data={data} 
        keyExtractor={(item) => item.id} 
        renderItem={({ item: { id, title, multiplier, image }, item }) => (
            <TouchableOpacity 
                onPress={() => onSelectRide(item)}
                style={tw`flex-row justify-between items-center px-10 ${id === selected?.id && 'bg-gray-200'}`}>
                <Image style={{
                    width: 100,
                    height: 100,
                    resizeMode: 'contain',
                }}
                    source={{ uri: image }} />
                <View style={tw`-ml-6`}>
                    <Text style={tw`text-xl font-semibold`}>{title}</Text>
                    <Text>{ travelTimeInformation?.duration?.text}</Text>
                </View>
                <Text style={tw`text-xl`}>
                    { new Intl.NumberFormat('en-gb', {
                    style: "currency",
                    currency: "CAD"
              }).format(
                (travelTimeInformation?.duration?.value * SURGE_CHARGE_RATE * multiplier) / 100
              ) }
              </Text>
            </TouchableOpacity>
            
        )}
        
        />

        <View className="mt-auto border-t border-gray-200">
            <TouchableOpacity 
            disabled={!selected} 
            style={tw`bg-black py-3 m-3 ${!selected && 'bg-gray-300'}`}>
                <Text style={tw`text-center text-white text-xl`}>
                    Choose {selected?.title}
                    </Text>
            </TouchableOpacity>
        </View>
      
    </SafeAreaView>
  )
}

export default RideOptionsCard

