import { useState } from 'react';
import { Alert, ScrollView, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { createUser, UserAuthenticationResponse, FirebaseErrorResponseData, FIREBASE_ERRORS, FIREBASE_ERROR_MESSAGES } from '../services/HttpRequestHandler';
import { AxiosError } from 'axios';
import AuthContent, { CredentialsType } from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/UI/LoadingOverlay';

type Props = {
    navigation: NativeStackNavigationProp<any>,
};

export default function SignupScreen({ navigation }: Props): JSX.Element {
    const [isAuthenticating, setIsAuthenticating] = useState<boolean>(false);

    const signupHandler = async (credentials: CredentialsType): Promise<void> => {
        setIsAuthenticating(true);

        await createUser(credentials.email, credentials.password)
            .then((userData: UserAuthenticationResponse) => {
                setIsAuthenticating(false);
                navigation.replace('Login');
            })
            .catch((error: AxiosError) => {
                setIsAuthenticating(false);

                if (error.response) {
                    const data: FirebaseErrorResponseData = error.response.data as FirebaseErrorResponseData;

                    switch (data.error.message) {
                        case FIREBASE_ERRORS.EMAIL_EXISTS:
                            Alert.alert('Error', FIREBASE_ERROR_MESSAGES.EMAIL_EXISTS);
                            break;
                        case FIREBASE_ERRORS.OPERATION_NOT_ALLOWED:
                            Alert.alert('Error', FIREBASE_ERROR_MESSAGES.OPERATION_NOT_ALLOWED);
                            break;
                        case FIREBASE_ERRORS.TOO_MANY_ATTEMPTS_TRY_LATER:
                            Alert.alert('Error', FIREBASE_ERROR_MESSAGES.TOO_MANY_ATTEMPTS_TRY_LATER);
                            break;
                        case FIREBASE_ERRORS.WEEK_PASSWORD:
                            Alert.alert('Error', FIREBASE_ERROR_MESSAGES.WEEK_PASSWORD);
                            break;
                        default:
                            Alert.alert('Error', error.message);
                    }
                }
            });
    };

    return (
        <ScrollView contentContainerStyle={ styles.container }>
            {
                isAuthenticating
                    ? <LoadingOverlay message='Creating user...' />
                    : <AuthContent onAuthenticate={ signupHandler } />
            }
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
