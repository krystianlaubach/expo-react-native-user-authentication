import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import Navigation from './navigation/Navigation';

export default function App(): JSX.Element {
    return (
        <Provider store={ store }>
            <PersistGate persistor={ persistor }>
                <StatusBar style='light' />
                <Navigation />
            </PersistGate>
        </Provider>
    );
}
