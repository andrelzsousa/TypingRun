import { useEffect } from 'react'

function StopWatch({time, isActive, setTime, finish}) {
    

    useEffect(() => {
        let intervalId

        if (time === 0) return

        if (isActive) {
            intervalId = setInterval(() => {
                setTime((t) => t - 1)
            }, 1000)
        }


        return () => { clearInterval(intervalId) }
    }, [isActive, setTime, time])

    return (
        <div className='box-time'>
            <p className='time'>{time}s</p>
        </div>
    )
}

export default StopWatch
