import { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';
import { Colours } from '../../assets/styles/Colours';
import FlatButton from '../UI/FlatButton';
import AuthForm, { AuthDataType, CredentialsInvalidType } from './AuthForm';

export type CredentialsType = {
    email: string,
    password: string,
};

type Props = {
    isLogin?: boolean,
    onAuthenticate: (credentials: CredentialsType) => void,
};

export default function AuthContent({ isLogin = false, onAuthenticate }: Props): JSX.Element {
    const [credentialsInvalid, setCredentialsInvalid] = useState<CredentialsInvalidType>({
        emailIsInvalid: false,
        emailsDontMatch: false,
        passwordIsInvalid: false,
        passwordsDontMatch: false,
    });

    const switchAuthModeHandler = (): void => {
        // Todo
    };

    const submitHandler = (authData: AuthDataType): void => {
        let { email, confirmEmail, password, confirmPassword } = authData;

        email = email.trim();
        password = password.trim();

        const emailIsValid = email.includes('@');
        const passwordIsValid = password.length > 6;
        const emailsAreEqual = email === confirmEmail;
        const passwordsAreEqual = password === confirmPassword;

        if (
            !emailIsValid ||
            !passwordIsValid ||
            (!isLogin && (!emailsAreEqual || !passwordsAreEqual))
        ) {
            Alert.alert('Invalid Input', 'Please check your entered credentials.');
            setCredentialsInvalid({
                emailIsInvalid: !emailIsValid,
                emailsDontMatch: !emailIsValid || !emailsAreEqual,
                passwordIsInvalid: !passwordIsValid,
                passwordsDontMatch: !passwordIsValid || !passwordsAreEqual,
            });

            return;
        }

        onAuthenticate({
            email,
            password
        });
    }

    return (
        <View style={ styles.authContent }>
            <AuthForm
                isLogin={ isLogin }
                onSubmit={ submitHandler }
                credentialsInvalid={ credentialsInvalid }
            />
            <View style={ styles.buttons }>
                <FlatButton onPress={ switchAuthModeHandler }>{ isLogin ? 'Create a new user' : 'Log in' }</FlatButton>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    authContent: {
        marginTop: 64,
        marginHorizontal: 32,
        padding: 16,
        borderRadius: 8,
        backgroundColor: Colours.yellow.s100,
        elevation: 2,
        shadowColor: 'black',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.35,
        shadowRadius: 4,
    },
    buttons: {
        marginTop: 8,
    },
});
