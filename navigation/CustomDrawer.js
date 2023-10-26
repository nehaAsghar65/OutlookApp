import 'react-native-gesture-handler';
import React, { useState, useEffect } from "react";
import { Image, View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';
import { Archive, Deleted, Drafts, Groups, Home, Inbox, Junk, Sent } from '../screens';
import { createDrawerNavigator } from '@react-navigation/drawer';
import MainStackNavigator from './MainStackNavigator';
import { PickerList, TabIcon, TextButton } from '../components';
import { icons, COLORS, FONTS, SIZES ,dummyData} from '../constants';
import { useNavigation } from '@react-navigation/native';
import DrawerContent from './DrawerContent';

const Drawer = createDrawerNavigator();
const CustomDrawer = () => {
  const [focused, setFocused] = useState(true)
  const [others, setOthers] = useState(false)
  const [showPicker, setShowPicker] = useState(false);
  const [filterStatus, setFilterStatus] = useState("Filter")
  const navigation = useNavigation()

  return (
    <Drawer.Navigator
      drawerContent={props => <DrawerContent {...props} />}
    >

      <Drawer.Screen
        name="Inbox"
        component={MainStackNavigator}
        options={() => ({
          headerShown: true,
          headerTintColor: 'white',
          headerStyle: {
            height: 90,
            backgroundColor: COLORS.primary,
          },
          headerTitle: () => (
            <View >
            <Text style={{ marginLeft: 7, fontSize: 21, fontWeight: "bold", color: COLORS.light }}>Inbox</Text>
            <View style={{
              marginTop: 20,
              flexDirection: "row",
              justifyContent: 'space-between',
            }}>
              <TextButton
                label="Focused"
                focused={focused}
                contentContainerStyle={{
                  height: 25,
                  width: 60,
                  borderRadius: SIZES.radius,
                  backgroundColor: focused ? COLORS.grey20 : null,
                }}
                labelStyle={{
                  ...FONTS.h5
                }}
                onPress={() => {
                  setFocused(!focused)
                  setOthers(false)
                }}
              />
              <TextButton
                label="Others"
                focused={others}
                contentContainerStyle={{
                  height: 25,
                  width: 50,
                  borderRadius: SIZES.radius,
                  marginLeft: SIZES.base,
                  backgroundColor: others ? COLORS.grey20 : null

                }}
                labelStyle={{
                  ...FONTS.h5
                }}
                onPress={() => {
                  setOthers(!others)
                  setFocused(false)
                }}
              />


            </View>

          </View>),
          headerRight: () => (
            <SafeAreaView style={{ flex: 1, position: 'absolute', padding: 10 }}>
              <TouchableOpacity style={{ justifyContent: 'flex-end', paddingHorizontal: 30, paddingBottom: 8, flexDirection: 'row' }}
                onPress={() => { navigation.navigate('Search') }}>
                <Image
                  source={icons.search}
                  style={{ height: 20, width: 20 }} />
              </TouchableOpacity>
              <TextButton
                label={filterStatus}
                contentContainerStyle={{
                  position: 'fixed',
                  marginTop: 20,
                  height: 25,
                  width: 'auto',
                  borderRadius: SIZES.radius,
                  paddingHorizontal: 20,
                  backgroundColor: COLORS.grey20,
                }}
                labelStyle={{
                  ...FONTS.h5
                }}
                onPress={() => setShowPicker(!showPicker)}
              />
              {showPicker && 
              <PickerList showList={showPicker} 
              setShowList={setShowPicker} 
              filterStatus={filterStatus} 
              setFilterStatus={setFilterStatus} 
              data={dummyData.filterItems}/>}

            </SafeAreaView>

          ),
          tabBarIcon: ({ focused }) => <TabIcon focused={focused}
            icon={icons.email} />
        })}
      />
      <Drawer.Screen
        name='Drafts'
        component={Drafts}
        options={{
          headerShown: true,
          headerTintColor: "white",
          headerStyle: { backgroundColor: COLORS.primary }
        }} />
      <Drawer.Screen
        name='Archive'
        component={Archive}
        options={{
          headerShown: true,
          headerTintColor: "white",
          headerStyle: { backgroundColor: COLORS.primary }

        }} />
      <Drawer.Screen
        name='Sent'
        component={Sent}
        options={{
          headerShown: true,
          headerTintColor: "white",
          headerStyle: { backgroundColor: COLORS.primary }

        }} />
      <Drawer.Screen
        name='Groups'
        component={Groups}
        options={{
          headerShown: true,
          headerTintColor: "white",
          headerStyle: { backgroundColor: COLORS.primary }

        }} />
      <Drawer.Screen
        name='Deleted'
        component={Deleted}
        options={{
          headerShown: true,
          headerTintColor: "white",
          headerStyle: { backgroundColor: COLORS.primary }

        }} />
      <Drawer.Screen
        name='Junk'
        component={Junk}
        options={{
          headerShown: true,
          headerTintColor: "white",
          headerStyle: { backgroundColor: COLORS.primary }

        }} />
    </Drawer.Navigator>

  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
  },
});




