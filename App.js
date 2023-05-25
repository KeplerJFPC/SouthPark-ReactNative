import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons'

//navegaciones
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//pantallas
import PersonajesScreen from './Screens/PersonajesScreen';
import DetailsScreen from './Screens/DetailsScreen';
import HomeScreen from './Screens/HomeScreen';

const Tab = createBottomTabNavigator();
const PersonajeStack = createStackNavigator();

function PersonajeStacksScreen() {
  return (
    <PersonajeStack.Navigator>
      <PersonajeStack.Screen name="Personaje" component={PersonajesScreen}/>
      <PersonajeStack.Screen name="DetailsScreen" component={DetailsScreen}
        options={({ route }) => ({ headerShown: true, title: route.params.user.name })}
      />
    </PersonajeStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarLabel: "Inicio",
          tabBarIcon: ({ color }) => (
            <Ionicons name={"ios-home"} size={20} color={color} />
          )
        }} />
        <Tab.Screen name="Personajes" component={PersonajeStacksScreen} options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name={"ios-people"} size={20} color={color} />
          )
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

