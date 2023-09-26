import { StyleProp, TextStyle } from "react-native"

export interface TimeCountdownProps {
    utcDateTime: string
    radius: number
    labelTextStyle?: StyleProp<TextStyle>
    progressValueStyle?: TextStyle
    activeStrokeColor?: string
    inactiveStrokeColor?: string
}

export interface CountdownProps {
    seconds: number
    radius: number
    labelTextStyle?: StyleProp<TextStyle>
    progressValueStyle?: TextStyle
    activeStrokeColor?: string
    inactiveStrokeColor?: string
}