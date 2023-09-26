import { useState } from "react"
import { Text } from "react-native"
import { useCountdown } from "react-native-countdown-circle-timer"
import { CountdownProps } from "./App"
import CircularProgress from "react-native-circular-progress-indicator"


const SecondCountdown = (props: CountdownProps) => {
    const { remainingTime } = useCountdown({
        duration: props.seconds,
        colors: '#000',
        isPlaying: true
    })

    const seconds = remainingTime % 60

    return (
        <CircularProgress
            value={seconds}
            radius={60}
            progressValueColor={'#000'}
            maxValue={60}
            activeStrokeColor="#000"
        />
    )
}

export default SecondCountdown