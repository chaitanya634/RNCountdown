
import React, { useEffect, useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import TimeCountdown from './src/TimeCountdown';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }} >
      <TimeCountdown
        utcDateTime="2023-09-26 13:30:00"
        radius={40}
      />
    </SafeAreaView>
  )
}

export default App;


