import { useState } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Logo } from '../../assets/images';
import Button from '../UI/Button';
import Input from '../UI/Input';

export type AuthDataType = {
    email: string,
    confirmEmail: string,
    password: string,
    confirmPassword: string,
};

export type CredentialsInvalidType = {
    emailIsInvalid: boolean,
    emailsDontMatch: boolean,
    passwordIsInvalid: boolean,
    passwordsDontMatch: boolean,
};

type Props = {
    isLogin: boolean,
    onSubmit: (authData: AuthDataType) => void,
    credentialsInvalid: CredentialsInvalidType,
};

export default function AuthForm({ isLogin, onSubmit, credentialsInvalid }: Props): JSX.Element {
    const [enteredEmail, setEnteredEmail] = useState<string>('');
    const [enteredConfirmEmail, setEnteredConfirmEmail] = useState<string>('');
    const [enteredPassword, setEnteredPassword] = useState<string>('');
    const [enteredConfirmPassword, setEnteredConfirmPassword] = useState<string>('');

    const updateEnteredEmailHandler = (enteredValue: string): void => {
        setEnteredEmail(enteredValue);
    };

    const updateEnteredConfirmEmailHandler = (enteredValue: string): void => {
        setEnteredConfirmEmail(enteredValue);
    };

    const updateEnteredPasswordHandler = (enteredValue: string): void => {
        setEnteredPassword(enteredValue);
    };

    const updateEnteredConfirmPasswordHandler = (enteredValue: string): void => {
        setEnteredConfirmPassword(enteredValue);
    };

    const submitHandler = (): void => {
        onSubmit({
            email: enteredEmail,
            confirmEmail: enteredConfirmEmail,
            password: enteredPassword,
            confirmPassword: enteredConfirmPassword,
        });
    }

    return (
        <View style={ styles.form }>
            <View>
                <View style={ styles.logoContainer }><Image source={ Logo } style={ styles.logo } /></View>
                <Input
                    label='Email Address'
                    onUpdateValue={ updateEnteredEmailHandler }
                    value={ enteredEmail }
                    keyboardType='email-address'
                    isInvalid={ credentialsInvalid.emailIsInvalid }
                />
                {
                    !isLogin && <Input
                        label='Confirm Email Address'
                        onUpdateValue={ updateEnteredConfirmEmailHandler }
                        value={ enteredConfirmEmail }
                        keyboardType='email-address'
                        isInvalid={ credentialsInvalid.emailsDontMatch }
                    />
                }
                <Input
                    label="Password"
                    onUpdateValue={ updateEnteredPasswordHandler }
                    secure={ true }
                    value={ enteredPassword }
                    keyboardType='default'
                    isInvalid={ credentialsInvalid.passwordIsInvalid }
                />
                {
                    !isLogin && <Input
                        label="Confirm Password"
                        onUpdateValue={ updateEnteredConfirmPasswordHandler }
                        secure={ true }
                        value={ enteredConfirmPassword }
                        keyboardType='default'
                        isInvalid={ credentialsInvalid.passwordsDontMatch }
                    />
                }
                <View style={ styles.buttons }>
                    <Button onPress={submitHandler}>{ isLogin ? 'Log In' : 'Sign Up' }</Button>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    form: {

    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    logo:  {
        width: 170,
        height: 50,
    },
    buttons: {
        marginTop: 12,
    },
});
