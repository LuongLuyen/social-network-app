import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Login from './src/Screens/Login'
import HomeApp from './src/Screens/HomeApp'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: () => null,
        }}
        >
        <Stack.Screen 
          name="Login" 
          component={Login}
        />
        <Stack.Screen 
          name="HomeApp" options={{title: 'Home App'}} 
          component={HomeApp}
        />
    </Stack.Navigator>
  </NavigationContainer>
  )
}
