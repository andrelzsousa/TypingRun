import { useEffect } from 'react'

function StopWatch({time, isActive, setTime, finish}) {
    

    useEffect(() => {
        let intervalId

        if (isActive) {
            intervalId = setInterval(() => {
                setTime((t) => t + 1)
            }, 1000)
        }


        return () => { clearInterval(intervalId) }
    }, [isActive, setTime])

    return (
        <div>
            <p>{time}</p>
        </div>
    )
}

export default StopWatch
