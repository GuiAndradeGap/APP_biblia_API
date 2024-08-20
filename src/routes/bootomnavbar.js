import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/home';
import Chat from '../screens/chat';
import Categorias from '../screens/categorias';
import Moments from '../screens/moments';

const Tab = createBottomTabNavigator();

export default function Bottomnav() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Chat" component={Chat} />
      <Tab.Screen name="Categorias" component={Categorias} />
      <Tab.Screen name="Moments" component={Moments} />
    </Tab.Navigator>
  );
}