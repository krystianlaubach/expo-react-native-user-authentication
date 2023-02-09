import { useState } from 'react';
import { Alert, ScrollView, StyleSheet } from 'react-native';
import { signIn, UserAuthenticationResponse, FirebaseErrorResponseData, FIREBASE_ERRORS, FIREBASE_ERROR_MESSAGES } from '../services/HttpRequestHandler';
import { AxiosError } from 'axios';
import { useDispatch } from 'react-redux';
import { authenticate } from '../redux/authSlice';
import AuthContent, { CredentialsType } from '../components/Auth/AuthContent';
import LoadingOverlay from '../components/UI/LoadingOverlay';

export default function LoginScreen(): JSX.Element {
    const [isAuthenticating, setIsAuthenticating] = useState<boolean>(false);

    const dispatch = useDispatch();

    const signupHandler = async (credentials: CredentialsType): Promise<void> => {
        setIsAuthenticating(true);

        await signIn(credentials.email, credentials.password)
            .then((userData: UserAuthenticationResponse) => {
                dispatch(authenticate({
                    token: userData.idToken,
                }));

                setIsAuthenticating(false);
            })
            .catch((error: AxiosError) => {
                setIsAuthenticating(false);

                if (error.response) {
                    const data: FirebaseErrorResponseData = error.response.data as FirebaseErrorResponseData;

                    switch (data.error.message) {
                        case FIREBASE_ERRORS.EMAIL_NOT_FOUND:
                            Alert.alert('Error', FIREBASE_ERROR_MESSAGES.EMAIL_NOT_FOUND);
                            break;
                        case FIREBASE_ERRORS.INVALID_PASSWORD:
                            Alert.alert('Error', FIREBASE_ERROR_MESSAGES.INVALID_PASSWORD);
                            break;
                        case FIREBASE_ERRORS.TOO_MANY_ATTEMPTS_TRY_LATER:
                            Alert.alert('Error', FIREBASE_ERROR_MESSAGES.TOO_MANY_ATTEMPTS_TRY_LATER);
                            break;
                        case FIREBASE_ERRORS.USER_DISABLED:
                            Alert.alert('Error', FIREBASE_ERROR_MESSAGES.USER_DISABLED);
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
                    ? <LoadingOverlay message='Signing in...' />
                    : <AuthContent isLogin={ true } onAuthenticate={ signupHandler } />
            }
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
