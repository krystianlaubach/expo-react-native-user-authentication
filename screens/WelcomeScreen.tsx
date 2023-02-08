import { ScrollView, StyleSheet, Text } from 'react-native';

export default function WelcomeScreen(): JSX.Element {
    return (
        <ScrollView contentContainerStyle={ styles.rootContainer }>
            <Text style={ styles.title }>Welcome!</Text>
            <Text>You authenticated successfully!</Text>
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
