import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Onboarding from '../pages/onboarding/onboarding_01Page';
import OnboardingNext from '../pages/onboarding/onboarding_02Page';
import HomePage from '../pages/Home/indexPage';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const ScreenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
    backgroundColor: '#fff'
  }
};

//stack navigation
function MainStackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name='Onboarding' component={Onboarding} options={{ headerShown: false }} />
      <Stack.Screen name='OnboardingNext' component={OnboardingNext} options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}

//bottom navigation
function BottomNavigator() {
  return (
    <Tab.Navigator screenOptions={ScreenOptions}>
      
    </Tab.Navigator>
  );
}


//container navigation
function RootStackNavigator() {
  return (
    <Stack.Navigator initialRouteName="Onboarding">
      <Stack.Screen name="Home" component={HomePage} options={{ headerShown: false }} />
      <Stack.Screen name="Main" component={BottomNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />
      <Stack.Screen name="OnboardingNext" component={OnboardingNext}  options={{ headerShown: false }}/>
    </Stack.Navigator>
  );
}


//render all navigation
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <RootStackNavigator />
    </NavigationContainer>
  );
}
