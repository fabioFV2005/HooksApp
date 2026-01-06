import { useEffect, useState } from "react";

const colors = {
    red: 'bg-red-500 animate-pulse',
    yellow: 'bg-yellow-500 animate-pulse',
    green: 'bg-green-500 animate-pulse',
}
type LightColor = keyof typeof colors;


export const TrafficLightWithEffect = () => {

    const [light, setLight] = useState<LightColor>('red')
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
        if(countdown > 0) return;


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

    return (
        <div className="min-h-screen bg-linear-to-br from-slate-900 via-gray-900 to-slate-800 flex items-center justify-center p-4">
            <div className="flex flex-col items-center space-y-8">

                <h1 className="text-white text-3xl font-thin">Semaforo with useEffect</h1>
                <h2 className="text-white text-xl">{countdown}</h2>

                <div className="w-64 bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full transition-all duration-1000 ease-linear" 
                    style={{width: `${countdown / actualTime * 100}%`}}
                    >
                    </div>
                </div>





                <div className={`w-32 h-32 ${light === 'red' ? colors[light] : 'bg-gray-500'} rounded-full`}></div>




                <div className={`w-32 h-32 ${light === 'yellow' ? colors[light] : 'bg-gray-500'} rounded-full`}></div>
                <div className={`w-32 h-32 ${light === 'green' ? colors[light] : 'bg-gray-500'} rounded-full`}></div>

                {/* Botón para cambiar el estado de la luz */}

            </div>
        </div>
    );
};