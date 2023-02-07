import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import AuthStack from './navigation/AuthStack';

const Stack = createNativeStackNavigator();

export default function App(): JSX.Element {
    return (
        <>
            <StatusBar style='light' />
            <NavigationContainer>
                <AuthStack />
            </NavigationContainer>
        </>
    );
}
