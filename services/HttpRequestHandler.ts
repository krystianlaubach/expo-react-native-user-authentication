import axios from 'axios';

const API_URL = 'https://identitytoolkit.googleapis.com/v1/';
const SIGN_UP_PATH = 'accounts:signUp?key=';
const SIGN_IN_PATH = 'accounts:signInWithPassword?key=';
const API_KEY = 'AIzaSyANbsHXDfWD_ZCByEWz_ns0xtdwjxmvOM8'

export type UserAuthenticationResponse = {
    displayName?: string
    email: string,
    expiresIn: string,
    idToken: string,
    kind: string,
    localId: string,
    refreshToken: string,
    registered?: boolean,
};

export type FirebaseErrorResponseData = {
    error: {
        code: string,
        message: string,
    },
};

export const FIREBASE_ERRORS = {
    EMAIL_EXISTS: 'EMAIL_EXISTS',
    OPERATION_NOT_ALLOWED: 'OPERATION_NOT_ALLOWED',
    TOO_MANY_ATTEMPTS_TRY_LATER: 'TOO_MANY_ATTEMPTS_TRY_LATER',
    WEEK_PASSWORD: 'WEAK_PASSWORD : Password should be at least 6 characters',
    EMAIL_NOT_FOUND: 'EMAIL_NOT_FOUND',
    INVALID_PASSWORD: 'INVALID_PASSWORD',
    USER_DISABLED: 'USER_DISABLED',
};

export const FIREBASE_ERROR_MESSAGES = {
    EMAIL_EXISTS: 'The email address is already in use by another account.',
    OPERATION_NOT_ALLOWED: 'Password sign-in is disabled for this project.',
    TOO_MANY_ATTEMPTS_TRY_LATER: 'We have blocked all requests from this device due to unusual activity. Try again later.',
    WEEK_PASSWORD: 'Password should be at least 6 characters.',
    EMAIL_NOT_FOUND: 'There is no user record corresponding to this identifier. The user may have been deleted.',
    INVALID_PASSWORD: 'The password is invalid or the user does not have a password.',
    USER_DISABLED: 'The user account has been disabled by an administrator.',
};

export async function createUser(email: string, password: string): Promise<UserAuthenticationResponse> {
    const response = await axios.post(
        API_URL + SIGN_UP_PATH + API_KEY,
        {
            email: email,
            password: password,
            returnSecureToken: true,
        },
        {
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
            },
        }
    );

    return response.data;
}

export async function signIn(email: string, password: string): Promise<UserAuthenticationResponse> {
    const response = await axios.post(
        API_URL + SIGN_IN_PATH + API_KEY,
        {
            email: email,
            password: password,
            returnSecureToken: true,
        },
        {
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json',
            },
        }
    );

    return response.data;
}
