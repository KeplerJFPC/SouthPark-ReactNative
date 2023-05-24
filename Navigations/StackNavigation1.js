import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import DetailsScreen from '../Screens/DetailsScreen';

const Stack = createStackNavigator();
const screenOptionStyle = {
    headerShown : false
}

export default function StackNavigation1(){
    return(
        <Stack.Navigator screenOptions={screenOptionStyle}>
            <Stack.Screen name="HomeScreen" component={HomeScreen}
                options={{headerShown:false, headerTitle:'Personajes'}}
            />
            <Stack.Screen name="DetailsScreen" component={DetailsScreen}
                options={({route})=>({ headerShown:true, title: route.params.user.name})}
            />
        </Stack.Navigator>

    )
}