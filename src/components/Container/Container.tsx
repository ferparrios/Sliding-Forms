import React, {useState} from 'react';
import {
  KeyboardAvoidingView,
  SafeAreaView,
  ScrollView,
  Text,
} from 'react-native';
import {Inputs} from '../Inputs/Inputs';

export interface ContainerProps {
  form: any;
}

export const Container = ({form}: ContainerProps) => {
  const [currentForm, setCurrentForm] = useState([]);

  return (
    <SafeAreaView>
      <ScrollView horizontal={true}>
        {form.map((field: any) => {
          return (
            <Inputs
              key={field.id}
              placeholder={field.placeholder}
              value={field.value}
              // type={currentField.type}
              // onChangeText={createInputChangeHandler(field)}
              label={field.label}
              isSecureEntry={field.type == 'password'}
              name={field.name}
            />
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};
