import { useState } from "react"
import { Text } from "react-native"
import { useCountdown } from "react-native-countdown-circle-timer"
import { CountdownProps } from "./App"
import CircularProgress from "react-native-circular-progress-indicator"

const HourCountdown = (props: CountdownProps) => {

    const { remainingTime } = useCountdown({
        duration: props.seconds,
        colors: '#000',
        isPlaying: true
    })

    const hours = Math.floor(remainingTime / 3600)

    return (
        // <Text>{hours}</Text>
        <CircularProgress
            value={hours}
            radius={60}
            progressValueColor={'#000'}
            maxValue={24}
            activeStrokeColor="#000"
        />
    )
}

export default HourCountdown