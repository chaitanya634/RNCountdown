import { useState } from "react"
import { Text } from "react-native"
import { useCountdown } from "react-native-countdown-circle-timer"
import { CountdownProps } from "./App"
import CircularProgress from "react-native-circular-progress-indicator"

const MinuteCountdown = (props: CountdownProps) => {

    const { remainingTime } = useCountdown({
        duration: props.seconds,
        colors: '#000',
        isPlaying: true
    })

    const minutes = Math.floor((remainingTime % 3600) / 60)

    return (
        // <Text>{minutes}</Text>
        <CircularProgress
            value={minutes}
            radius={60}
            progressValueColor={'#000'}
            maxValue={60}
            activeStrokeColor="#000"
        />
    )
}

export default MinuteCountdown