import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';

import AuthStack from './AuthStack';
import AuthenticatedStack from './AuthenticatedStack';

export default function Navigation(): JSX.Element {
    const isAuthenticated: boolean = useSelector((state: RootState) => state.auth.isAuthenticated);

    return (
        <SafeAreaProvider>
            <NavigationContainer>
                {
                    isAuthenticated
                        ? <AuthenticatedStack />
                        : <AuthStack />
                }
            </NavigationContainer>
        </SafeAreaProvider>
    );
}
