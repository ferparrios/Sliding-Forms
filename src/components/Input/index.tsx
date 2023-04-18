import React, {useState} from 'react';
import {TextInput} from 'react-native';

interface InputProps {
  placeholder?: string
  value: string
  onChange: (value: string) => void
}

const Input = ({value, onChange, placeholder}: InputProps) => {
  // const [text, setText] = useState('');
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChange}
      style={{borderColor: 'gray', borderWidth: 1, padding: 10, borderRadius: 5}}
    />
  );
};

export default Input;
