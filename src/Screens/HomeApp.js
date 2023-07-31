import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { StyleSheet,View , Text, Image} from 'react-native'

import Setting from '../Components/Setting'
import Home from '../Components/Home'
import Watch from '../Components/Watch'
import Notification from '../Components/Notification'
import Chat from '../Components/Chat'

import { Ionicons } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons'


const Tab = createBottomTabNavigator()

function HomeApp() {
    return ( 
        <View style={styles.container}>
            <Tab.Navigator
                screenOptions={{
                    header: () => null,
                }}
            >
                <Tab.Screen
                    name = "Home"
                    component={Home}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="home" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name = "Watch"
                    component={Watch}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Entypo name="folder-video" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name = "Chat"
                    component={Chat}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Entypo name="message" size={size} color={color} />
                        ),
                    }}
                />
                <Tab.Screen
                    name = "Notification"
                    component={Notification}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Entypo name="notification" size={size} color={color} />
                        ),
                    }}
                />
                <Tab.Screen
                    name = "Setting"
                    component={Setting}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <Ionicons name="settings" size={size} color={color} />
                        ),
                    }}
                />
            </Tab.Navigator>
        </View>
     )
}
const styles = StyleSheet.create({
    container: {
        width: '100%', 
        height: '100%', 
        backgroundColor: '#e1e3e0ee',
        paddingTop: '10%'
    }})
export default HomeApp