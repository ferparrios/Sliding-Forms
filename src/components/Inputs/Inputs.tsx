import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Dimensions,
  KeyboardAvoidingView,
} from 'react-native';

export interface InputsProps {
  value?: string;
  onChangeText?: any;
  placeholder: string;
  isSecureEntry?: boolean;
  type?: string;
  label?: string;
  name?: string;
}

export const Inputs = ({
  label,
  value,
  onChangeText,
  placeholder,
  isSecureEntry,
  type,
  name,
}: InputsProps) => {
  const [isInputActive, setIsInputActive] = useState(false);
  const selectKeyboardType = () => {
    if (type === 'number') {
      return 'number-pad';
    }
    return 'ascii-capable';
  };
  return (
    <View
      style={{
        flexDirection: 'column',
        width: Dimensions.get('window').width - 35,
        height: Dimensions.get('window').height - 250,
        marginHorizontal: 5,
        paddingHorizontal: 10,
      }}>
      <View style={styles.labelContainer}>
        {label !== ' ' ? (
          <Text
            style={{
              color: '#101405',
              fontWeight: 'bold',
              fontSize: 20,
            }}>
            {label} {name}
          </Text>
        ) : null}
      </View>
      <View>
        <KeyboardAvoidingView behavior="padding">
          <TextInput
            value={value}
            onChangeText={onChangeText}
            placeholder={placeholder}
            placeholderTextColor={'gray'}
            autoCapitalize="none"
            style={styles.input}
            onFocus={() => setIsInputActive(true)}
            secureTextEntry={isSecureEntry}
            keyboardType={selectKeyboardType()}
          />
        </KeyboardAvoidingView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  labelContainer: {
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    fontSize: 16,
    padding: 15,
    position: 'relative',
    width: '100%',
    paddingLeft: 30,
  },
});
