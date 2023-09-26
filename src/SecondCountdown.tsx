import { Text, View } from "react-native"
import { useCountdown } from "react-native-countdown-circle-timer"
import CircularProgress from "react-native-circular-progress-indicator"
import { CountdownProps } from "./types"

const SecondCountdown = (props: CountdownProps) => {
    const { remainingTime } = useCountdown({
        duration: props.seconds,
        colors: '#000',
        isPlaying: true
    })

    const seconds = remainingTime % 60

    return (
        <View style={{alignItems: 'center'}} >
            <CircularProgress
                value={seconds}
                radius={props.radius}
                progressValueStyle={props.progressValueStyle}
                maxValue={60}
                activeStrokeColor={props.activeStrokeColor}
                inActiveStrokeColor={props.inactiveStrokeColor}
            />
            <Text style={props.labelTextStyle} >Seconds</Text>
        </View>
    )
}

export default SecondCountdown