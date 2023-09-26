import { Text, View } from "react-native"
import { useCountdown } from "react-native-countdown-circle-timer"
import CircularProgress from "react-native-circular-progress-indicator"
import { CountdownProps } from "./types"

const HourCountdown = (props: CountdownProps) => {

    const { remainingTime } = useCountdown({
        duration: props.seconds,
        colors: '#000',
        isPlaying: true
    })

    const hours = Math.floor(remainingTime / 3600)

    return (
        <View style={{ alignItems: 'center' }} >
            <CircularProgress
                value={hours}
                radius={props.radius}
                maxValue={24}
                progressValueStyle={props.progressValueStyle}
                activeStrokeColor={props.activeStrokeColor}
                inActiveStrokeColor={props.inactiveStrokeColor}
            />
            <Text style={props.labelTextStyle} >Hours</Text>
        </View>
    )
}

export default HourCountdown