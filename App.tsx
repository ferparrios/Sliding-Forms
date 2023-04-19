import React from 'react';
import {Container, Inputs} from './src/components';
import {form} from './src/form';

const formulario = [
  {
    name: 'retirementAge',
    placeholder: 'Age of retirement ',
    type: 'number',
    label: 'When you would like to retire?',
    id: 'field-99a38c7d-c230-464b-8bf0-9dcaf49c6e10',
  },
  {
    name: 'currentAge',
    placeholder: 'Current Age',
    type: 'number',
    label: 'How old are you?',
    id: 'field-3e28ee4b-206f-46e6-b3e6-c93ba366cbf3',
  },
  {
    name: 'spouseAge',
    placeholder: 'Spouse Age',
    type: 'number',
    label: 'How old is your spouse?',
    id: 'field-b73027ad-1722-47a4-bc53-a3bcffee245b',
  },
];

function App(): JSX.Element {
  return <Container form={formulario} />;
}

export default App;
