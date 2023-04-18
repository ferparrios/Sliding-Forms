import React, {useState} from 'react';
import {SafeAreaView, View} from 'react-native';
import {Button, Input} from './src/components';

function App(): JSX.Element {
  const [text, setText] = useState('')
  return (
    <SafeAreaView>
      <View style={{marginHorizontal: 50}}>
        <Button onPress={() => console.log('boton')} title='Press' />
      </View>
      <View
        style={{
          marginTop: 30
        }}
      >
        <Input placeholder='Test' value={text} onChange={setText} />
      </View>
    </SafeAreaView>
  );
}

export default App;
