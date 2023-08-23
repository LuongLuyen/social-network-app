import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Login from './src/Screens/Login'
import ChatMain from './src/Screens/ChatMain'
import HomeApp from './src/Screens/HomeApp'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Login" 
          component={Login}
        />
        <Stack.Screen 
          name="HomeApp" options={{title: 'Home App'}} 
          component={HomeApp}
        />
        <Stack.Screen 
          name="ChatMain" options={{title: 'Chat'}}
          component={ChatMain}
        />
    </Stack.Navigator>
  </NavigationContainer>
  )
}
