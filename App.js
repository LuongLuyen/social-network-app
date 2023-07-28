import {NavigationContainer} from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Login from './src/Screens/Login'
import Home from './src/Screens/Home'

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
          name="Home" options={{title: 'Home App'}} 
          component={Home}
        />
    </Stack.Navigator>
  </NavigationContainer>
  )
}
