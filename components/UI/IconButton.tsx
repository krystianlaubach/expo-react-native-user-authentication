import { Pressable, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

type Props = {
    icon: 'person',
    color: string,
    size: number,
    onPress: () => void,
};

export default function IconButton({ icon, color, size, onPress }: Props): JSX.Element {
    return (
        <Pressable style={({ pressed }) => [styles.button, pressed && styles.pressed]} onPress={ onPress }>
            <Ionicons name={ icon } color={ color } size={ size } />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    button: {
        margin: 8,
        borderRadius: 20,
    },
    pressed: {
        opacity: 0.7,
    },
});