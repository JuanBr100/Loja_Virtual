import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './pages/home'
import Detail from './pages/Details'

import {TouchableOpacity} from 'react-native'

import { Feather } from '@expo/vector-icons'

const Stack = createNativeStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen
                    name="Home" 
                    component={Home}
                    options={{ headerShown: false }}
                />

                <Stack.Screen
                    name="Detail"
                    component={Detail}
                    options={{ 
                        headerShown: true ,
                        headerRight: () => (
                            <TouchableOpacity style={{marginRight:15}}>
                                <Feather
                                    name="shopping-cart"
                                    size={24}
                                    color="black"
                                />
                            </TouchableOpacity>
                        )
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes;