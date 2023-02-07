import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Colours } from '../../assets/styles/Colours';

type Props = {
    children: string,
    onPress: () => void,
};

export default function Button({ children, onPress }: Props): JSX.Element {
    return (
        <Pressable style={({ pressed }) => [styles.button, pressed && styles.pressed]} onPress={ onPress }>
            <View>
                <Text style={ styles.buttonText }>{ children }</Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 6,
        paddingVertical: 8,
        paddingHorizontal: 12,
        backgroundColor: Colours.blue.s100,
        elevation: 2,
        shadowColor: Colours.black.s100,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.25,
        shadowRadius: 4,
    },
    pressed: {
        opacity: 0.7,
    },
    buttonText: {
        textAlign: 'center',
        color: Colours.white.s100,
        fontSize: 16,
        fontWeight: 'bold'
    },
});
