import React from 'react';
import {StyleSheet, TouchableOpacity,Text} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import DrawerIcon from "../Utils/Assets/Icons/DrawerIcon";
import {Colors} from "../Utils/Assets/Colors";

const HeaderBackButton = () => {
const navigation = useNavigation();
return (
<TouchableOpacity
style={styles.container}
onPress={() => navigation.openDrawer()}>
<DrawerIcon height={30} width={30} color={Colors?.black} />
</TouchableOpacity>
);
};
const styles = StyleSheet.create({
container: {
paddingHorizontal: 15,
},
});



export default HeaderBackButton;
