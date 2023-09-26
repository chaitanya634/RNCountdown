
import moment, { min, utc } from 'moment';
import React, { useEffect, useState } from 'react';
import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';

import { CountdownCircleTimer, useCountdown } from 'react-native-countdown-circle-timer'
import SecondCountdown from './SecondCountdown';
import MinuteCountdown from './MinuteCountdown';
import HourCountdown from './HourCountdown';

function SecondsDurationFromNow(utcDate: string): moment.Duration {
  var now = moment(new Date());
  const end = moment.utc(utcDate).local()
  var duration = moment.duration(end.diff(now));
  return duration
}

export interface CountdownProps { seconds: number }

function App(): JSX.Element {

  const duration = Math.floor(SecondsDurationFromNow("2023-09-26 09:30:00").asSeconds())

  return (
    <SafeAreaView style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }} >
      <SecondCountdown seconds={duration} />
      <MinuteCountdown seconds={duration} />
      <HourCountdown seconds={duration} />

      <Button
        title='go'
        onPress={() => {
          const val = Math.floor(SecondsDurationFromNow("2023-09-26 09:30:00").asSeconds())
          console.log('====================================');
          console.log(val);
          console.log(val % 60);
          console.log('====================================');
        }}
      />

      {/* hours */}
      <CountdownCircleTimer
        isPlaying
        duration={Math.floor(SecondsDurationFromNow("2023-09-26 09:30:00").asSeconds())}
        size={120}
        strokeWidth={8}
        colors='#000'
        onComplete={() => console.log('hr')}
        children={({ remainingTime }) => {
          const hours = Math.floor(remainingTime / 3600)
          const minutes = Math.floor((remainingTime % 3600) / 60)
          const seconds = remainingTime % 60
          return (
            <View>
              <Text>{`${hours}:${minutes}:${seconds}`}</Text>
            </View>
          )
        }}
      />

      
    </SafeAreaView>
  )
}

export default App;


