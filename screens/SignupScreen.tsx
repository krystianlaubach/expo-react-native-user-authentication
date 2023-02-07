import { StyleSheet } from 'react-native';
import AuthContent from '../components/Auth/AuthContent';

type Props = {

};

export default function SignupScreen({}: Props): JSX.Element {
    return (
        <AuthContent onAuthenticate={() => {}} />
    );
}

const styles = StyleSheet.create({

});
