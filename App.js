import { StatusBar } from 'expo-status-bar';
import { StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native'
import StackNavigation1 from './Navigations/StackNavigation1'

export default function App() {
  return (
      <NavigationContainer>
        <StackNavigation1/>
      </NavigationContainer>
  );
}

