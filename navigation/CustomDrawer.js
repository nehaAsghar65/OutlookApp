import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Inbox,Home, LandingScreen } from '../screens';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { COLORS } from '../constants';

const Drawer = createDrawerNavigator();
 
const CustomDrawer = () => {
  return (
    <Drawer.Navigator>
    <Drawer.Screen name="Home" component={Home} />
    <Drawer.Screen name="Inbox" component={Inbox} />
</Drawer.Navigator>

  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'blue',
  },
});
