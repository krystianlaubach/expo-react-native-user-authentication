import { useEffect, useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text } from 'react-native';
import { getMessage } from '../services/HttpRequestHandler';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import LoadingOverlay from '../components/UI/LoadingOverlay';

export default function WelcomeScreen(): JSX.Element {
    const userToken: string = useSelector((state: RootState) => state.auth.token);
    const [message, setMessage] = useState<string>('');
    const [isFetching, setIsFetching] = useState<boolean>(true);

    useEffect(() => {
        const fetchMessage = async (): Promise<string> => {
            return await getMessage(userToken);
        };

        setIsFetching(true);

        fetchMessage()
            .then((message: string) => {
                setMessage(message);
                setIsFetching(false);
            })
            .catch((error: Error) => {
                Alert.alert('An error occurred!', error.message);
                setIsFetching(false);
            });
    }, [userToken]);

    return (
        isFetching
            ? <LoadingOverlay message='Loading...' />
            : <ScrollView contentContainerStyle={ styles.rootContainer }>
                <Text style={ styles.title }>Welcome!</Text>
                <Text>You authenticated successfully!</Text>
                <Text>{ message }</Text>
            </ScrollView>
    );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 32,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
    },
});
