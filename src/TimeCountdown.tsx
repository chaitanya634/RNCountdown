import { View } from "react-native"
import HourCountdown from "./HourCountdown"
import MinuteCountdown from "./MinuteCountdown"
import SecondCountdown from "./SecondCountdown"
import moment from "moment"
import { TimeCountdownProps } from "./types"

function SecondsDurationFromNow(utcDate: string): moment.Duration {
    const now = moment(new Date());
    const end = moment.utc(utcDate).local()
    const duration = moment.duration(end.diff(now));
    return duration
}

const TimeCountdown = (props: TimeCountdownProps) => {
    const duration = Math.floor(SecondsDurationFromNow(props.utcDateTime).asSeconds())
    return (
        <View
            style={{
                flexDirection: 'row',
                width: '100%',
                justifyContent: 'center',
                alignContent: 'space-between'
            }} >
            <View style={{ flex: 1 }} />
            <HourCountdown
                seconds={duration}
                radius={props.radius}
                labelTextStyle={props.labelTextStyle}
                progressValueStyle={props.progressValueStyle}
                activeStrokeColor={props.activeStrokeColor}
                inactiveStrokeColor={props.inactiveStrokeColor} />

            <View style={{ flex: 1 }} />

            <MinuteCountdown
                seconds={duration}
                radius={props.radius}
                labelTextStyle={props.labelTextStyle}
                progressValueStyle={props.progressValueStyle}
                activeStrokeColor={props.activeStrokeColor}
                inactiveStrokeColor={props.inactiveStrokeColor} />

            <View style={{ flex: 1 }} />

            <SecondCountdown
                seconds={duration}
                radius={props.radius}
                labelTextStyle={props.labelTextStyle}
                progressValueStyle={props.progressValueStyle}
                activeStrokeColor={props.activeStrokeColor}
                inactiveStrokeColor={props.inactiveStrokeColor} />
            <View style={{ flex: 1 }} />
        </View>
    )
}

export default TimeCountdown