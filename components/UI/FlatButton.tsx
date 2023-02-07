import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Colours } from '../../assets/styles/Colours';

type Props = {
    children: string,
    onPress: () => void,
};

export default function FlatButton({ children, onPress }: Props): JSX.Element {
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
        borderWidth: 1,
        borderColor: Colours.blue.s100,
    },
    pressed: {
        opacity: 0.7,
    },
    buttonText: {
        textAlign: 'center',
        color: Colours.blue.s100,
        fontSize: 16,
        fontWeight: 'bold'
    },
});
