import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { FontAwesome5 } from '@expo/vector-icons';

import { Home } from '../screens/Home';
import { Wallet } from '../screens/Wallet';
import { Profile } from '../screens/Profile';
import { Settings } from '../screens/Settings';
import { Messages } from '../screens/Messages';
import { tabIcons } from '../constants/tabIcons';
import CustomTabBar from '../components/CustomTabBar';

const Tab = createBottomTabNavigator();

const AppTabs: React.FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={(props) => <CustomTabBar {...props} icons={tabIcons} />}
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => {
            const iconName = tabIcons[route.name]
            return <FontAwesome5 name={iconName} size={size} color={color} />
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Wallet" component={Wallet} />
        <Tab.Screen name="Messages" component={Messages} />
        <Tab.Screen name="Profile" component={Profile} />
        <Tab.Screen name="Settings" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppTabs;
