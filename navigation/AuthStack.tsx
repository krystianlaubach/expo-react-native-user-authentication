import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Colours } from '../assets/styles/Colours';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';

const Stack = createNativeStackNavigator();

export default function AuthStack(): JSX.Element {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: Colours.blue.s100 },
            headerTintColor: Colours.white.s100,
            contentStyle: { backgroundColor: Colours.white.s100 },
        }}>
            <Stack.Screen name="Login" component={ LoginScreen } />
            <Stack.Screen name="Signup" component={ SignupScreen } />
        </Stack.Navigator>
    );
}
