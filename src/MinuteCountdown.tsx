import { Text, View } from "react-native"
import { useCountdown } from "react-native-countdown-circle-timer"
import CircularProgress from "react-native-circular-progress-indicator"
import { CountdownProps } from "./types"

const MinuteCountdown = (props: CountdownProps) => {

    const { remainingTime } = useCountdown({
        duration: props.seconds,
        colors: '#000',
        isPlaying: true
    })

    const minutes = Math.floor((remainingTime % 3600) / 60)

    return (
        <View style={{ alignItems: 'center' }} >
            <CircularProgress
                value={minutes}
                radius={props.radius}
                maxValue={60}
                progressValueStyle={props.progressValueStyle}
                activeStrokeColor={props.activeStrokeColor}
                inActiveStrokeColor={props.inactiveStrokeColor}
            />
            <Text style={props.labelTextStyle} >Minutes</Text>
        </View>
    )
}

export default MinuteCountdown