import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Colours } from '../assets/styles/Colours';
import WelcomeScreen from '../screens/WelcomeScreen';

const Stack = createNativeStackNavigator();

export default function AuthenticatedStack(): JSX.Element {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: Colours.blue.s100 },
            headerTintColor: Colours.yellow.s100,
            contentStyle: { backgroundColor: Colours.white.s100 },
        }}>
            <Stack.Screen name="Welcome" component={ WelcomeScreen } />
        </Stack.Navigator>
    );
}
