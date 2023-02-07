import { StyleSheet } from 'react-native';
import AuthContent from '../components/Auth/AuthContent';

type Props = {

};

export default function LoginScreen({}: Props): JSX.Element {
    return (
        <AuthContent isLogin={ true } onAuthenticate={() => {}} />
    );
}

const styles = StyleSheet.create({

});
