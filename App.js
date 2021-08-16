// import { StatusBar } from "expo-status-bar";
import React from "react";
import { Provider } from "react-redux";
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  ScrollView,
  Image,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, GeodexSearch, SingleSpecimenView } from "./components";

import store from './store';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Geodex Search" component={GeodexSearch} />
          <Stack.Screen name="Single Specimen View" component={SingleSpecimenView} />
          {/* <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Settings" component={Settings} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
