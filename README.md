# Time Countdown for React Native

Made with love by Chaitanya Jadhav
Highly customizable package

![Image](https://i.ibb.co/MsS4XRN/Screenshot-2023-09-26-at-4-12-12-PM.png" alt="Screenshot-2023-09-26-at-4-12-12-PM)

Example:

import React, { useEffect, useState } from 'react';
import { SafeAreaView, View } from 'react-native';
import TimeCountdown from './src/TimeCountdown';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }} >
      **<TimeCountdown
	        utcDateTime="2023-09-26 13:30:00"
	        radius={40}
	        progressValueStyle={{ color: '#000' }}
	        labelTextStyle={{ fontSize: 14, color: '#000' }}
	        activeStrokeColor='#000'
      />**
    </SafeAreaView>
  )
}

export default App;



