import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Colours } from '../assets/styles/Colours';
import { useDispatch } from 'react-redux';
import { logout } from '../redux/authSlice';
import WelcomeScreen from '../screens/WelcomeScreen';
import IconButton from '../components/UI/IconButton';

const Stack = createNativeStackNavigator();

export default function AuthenticatedStack(): JSX.Element {
    const dispatch = useDispatch();

    const logoutHandler = (): void => {
        dispatch(logout());
    };

    return (
        <Stack.Navigator screenOptions={{
            headerStyle: { backgroundColor: Colours.blue.s100 },
            headerTintColor: Colours.yellow.s100,
            contentStyle: { backgroundColor: Colours.white.s100 },
        }}>
            <Stack.Screen name="Welcome" component={ WelcomeScreen } options={{
                headerRight: ({ tintColor }) => <IconButton icon='exit' color={ tintColor } size={24} onPress={ logoutHandler } />,
            }} />
        </Stack.Navigator>
    );
}
