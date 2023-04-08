/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import Dashboard from '../screens/Dashboard';
import Storage from '../screens/Storage';
import Cloud from '../screens/Cloud';
import Wallet from '../screens/Wallet';
import Support from '../screens/Support';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

import DashboardIcon from '../components/icons/DashboardIcon';
import CloudIcon from '../components/icons/CloudIcon';
import SettingIcon from '../components/icons/SettingIcon';
import StorageIcon from '../components/icons/StorageIcon';
import WalletIcon from '../components/icons/WalletIcon';
import SupportIcon from '../components/icons/SupportIcon';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Dashboard"
      screenOptions={{
        tabBarActiveTintColor: '#7C66EB',
      }}>
      <BottomTab.Screen
        name="Dashboard"
        component={Dashboard}
        options={({ navigation }: RootTabScreenProps<'Dashboard'>) => ({
          title: 'Dashboard',
          // tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          tabBarIcon: ({ color }) => <DashboardIcon color={color} />,
          // headerRight: () => (
          //   <Pressable
          //     onPress={() => navigation.navigate('Modal')}
          //     style={({ pressed }) => ({
          //       opacity: pressed ? 0.5 : 1,
          //     })}>
          //     <FontAwesome
          //       name="info-circle"
          //       size={25}
          //       color={Colors[colorScheme].text}
          //       style={{ marginRight: 15 }}
          //     />
          //   </Pressable>
          // ),
        })}
      />
      <BottomTab.Screen
        name="Storage"
        component={Storage}
        options={{
          title: 'Storage',
          tabBarIcon: ({ color }) => <StorageIcon color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Cloud"
        component={Cloud}
        options={{
          title: 'Cloud',
          tabBarIcon: ({ color }) => <CloudIcon color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Wallet"
        component={Wallet}
        options={{
          title: 'Wallet',
          headerShown: false,
          tabBarIcon: ({ color }) => <WalletIcon color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Support"
        component={Support}
        options={{
          title: 'Support',
          tabBarIcon: ({ color }) => <SupportIcon name="code" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
