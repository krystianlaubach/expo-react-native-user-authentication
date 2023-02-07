import { View, Text, TextInput, StyleSheet, KeyboardTypeOptions } from 'react-native';
import { Colours } from '../../assets/styles/Colours';

type Props = {
    label: string,
    keyboardType: KeyboardTypeOptions,
    secure?: boolean,
    onUpdateValue: (enteredValue: string) => void,
    value: string,
    isInvalid: boolean,
};

export default function Input({label, keyboardType, secure = false, onUpdateValue, value, isInvalid }: Props): JSX.Element {
    return (
        <View style={ styles.inputContainer }>
            <Text style={[ styles.label, isInvalid && styles.labelInvalid ]}>{ label }</Text>
            <TextInput
                style={[ styles.input, isInvalid && styles.inputInvalid ]}
                value={ value }
                secureTextEntry={ secure }
                keyboardType={ keyboardType }
                onChangeText={ onUpdateValue }
                autoCapitalize='none'
            />
        </View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
        marginVertical: 8,
    },
    label: {
        color: Colours.charcoal.s100,
        marginBottom: 4,
    },
    labelInvalid: {
        color: Colours.error.dark,
    },
    input: {
        paddingVertical: 8,
        paddingHorizontal: 6,
        backgroundColor: Colours.white.s100,
        borderRadius: 4,
        fontSize: 16,
        borderWidth: 1,
        borderBottomWidth: 4,
        borderColor: Colours.charcoal.s50,
    },
    inputInvalid: {
        borderWidth: 1,
        borderColor: Colours.error.dark,
    },
});
