import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import Ionicons from 'react-native-vector-icons/Ionicons'

//navegaciones
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

//pantallas
import PersonajesScreen from './Screens/Personaje';
import DetailsScreen from './Screens/DetailsScreen';
import HomeScreen from './Screens/HomeScreen';

const Tab = createBottomTabNavigator();
const personajesStack = createStackNavigator();

function PersonajesStack() {
  return (
    <personajesStack.Navigator>
      <personajesStack.Screen name="Personaje" component={PersonajesScreen}/>
      <personajesStack.Screen name="DetailsScreen" component={DetailsScreen}
        options={({ route }) => ({ headerShown: true, title: route.params.user.name })}
      />
    </personajesStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{ //Versiones anteriores tabBarOptions
          tabBarActiveTintColor: '#ff6600',//activeTintColor
          tabBarInactiveTintColor: "#060606",//inactiveTintColor
          tabBarShowLabel: true,//showLabel
          tabBarLabelStyle: { //labelStyle
            fontSize: 12
          },
          tabBarStyle: {//style
            paddingBottom: 5,
            backgroundColor: "#f3f3f1"
          }
        }}>
          <Tab.Screen name="Home" component={HomeScreen} options={{
            tabBarLabel: "Inicio",
            tabBarIcon: ({ color }) => (
              <Ionicons name={"ios-home"} size={20} color={color} />
            )
          }} />
          <Tab.Screen name="Personajes" component={PersonajesStack} options={{
            tabBarLabel: "Personajes",
            tabBarIcon: ({ color }) => (
              <Ionicons name={"ios-people"} size={20} color={color} />
            )
          }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});


