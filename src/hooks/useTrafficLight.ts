import { useEffect, useState } from "react";
const colors = {
    red: 'bg-red-500 animate-pulse',
    yellow: 'bg-yellow-500 animate-pulse',
    green: 'bg-green-500 animate-pulse',
}


type LightColor = keyof typeof colors;

export function useTrafficLight(color: LightColor) {
    const [light, setLight] = useState<LightColor>(color)
    const [countdown, setCountdown] = useState(5)
    const [actualTime, setActualTime] = useState(5);

    /*
        Countdown effect
    */
    useEffect(() => {
        // console.log({countdown})
        if (countdown === 0) return;
        const intervalId = setInterval(() => {
            // console.log('setInterval llamado')
            setCountdown(prev => prev > 0 ? prev - 1 : 0)
        }, 1000)
        return () => {
            // console.log('cleanup effect')
            clearInterval(intervalId)
        }

    }, [countdown])
    useEffect(() => {

    })

    /*
        Change light color effect
    */

    useEffect(() => {
        if (countdown > 0) return;

        if (light === 'red') {
            setCountdown(7)
            setActualTime(7);
            setLight('green')

            return;
        }
        if (light === 'green') {
            setCountdown(3)
            setActualTime(3);
            setLight('yellow')
            return;
        }
        if (light === 'yellow') {
            setCountdown(5)
            setActualTime(5);
            setLight('red')
            return;
        }
    }, [countdown, light])

    return {
        // Props
        light,
        countdown,
        actualTime,
        colors,

        // Computed
        percentage: (countdown / actualTime) * 100,
        greenLight: light === 'green' ? colors.green : 'bg-gray-500',
        YellowLight: light === 'yellow' ? colors.yellow : 'bg-gray-500',
        redLight: light === 'red' ? colors.red : 'bg-gray-500',
        // Methods
    }
}