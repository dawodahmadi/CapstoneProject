import Toast from "react-native-toast-message";
import authApi from "./AuthApi";
import AsyncStorage from "@react-native-async-storage/async-storage";

export async function signUpApi(body,navigation) {
    try {
        debugger;
        const response = await authApi.post(`/signup/user`,body);
        console.log(response);
        const jsonValue = JSON.stringify(response?.data);
        await AsyncStorage.setItem('userDetail', jsonValue);
        navigation.navigate('NavigationDrawer')
        return response.data;
    } catch (error) {
        console.error('error error',error);
        Toast.show({
            type: 'error',
            text1: 'Sign in error',
            text2: (error?.response?.data),
            position: 'top',
            visibilityTime: 2000,
        })
        throw error; // Optionally rethrow the error for higher-level handling
    }
}


export async function loginApi(body,navigation) {
    try {
        const response = await authApi.post(`/login/user`,body);
        const jsonValue = JSON.stringify(response?.data);
        await AsyncStorage.setItem('loginData', jsonValue);
        navigation.navigate('NavigationDrawer')
        return response.data;
    } catch (error) {
        console.error('error error',error);
        Toast.show({
            type: 'error',
            text1: 'Sign in error',
            text2: ('Something want wrong'),
            position: 'top',
            visibilityTime: 2000,
        })
        throw error; // Optionally rethrow the error for higher-level handling
    }
}
