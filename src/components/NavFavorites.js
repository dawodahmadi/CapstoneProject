import { FlatList, TouchableOpacity, View, Text } from 'react-native'
import React from 'react'
import { Icon } from "@rneui/themed"
import tw from 'tailwind-react-native-classnames'

const data = [
  {
    id: "1",
    icon: "home",
    location: "Home",
    destination: "Yomiuriland-mae Station"
  },
  {
    id: "2",
    icon: "briefcase",
    location: "Work",
    destination: "Shibuya Scramble Square"
  },
]

const NavFavorites = () => {
  return (
    <FlatList
      ItemSeparatorComponent={() => (
        <View style={[tw`bg-gray-200`, { height: 0.5 }]} />
      )}
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item: { location, destination, icon } }) => (
        <TouchableOpacity style={tw`flex-row items-center p-5`}>
          
            <Icon
              name={icon}
              type="ionicon"
              color="white"
              size={18}
            />
          
            <View>
                <Text style={tw`font-semibold text-lg`}>{location}</Text>
                <Text style={tw`text-gray-500`}>{destination}</Text>
                </View>
                        </TouchableOpacity>
      )}
    />
  )
}

export default NavFavorites
