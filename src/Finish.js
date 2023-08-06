import { useState, useEffect } from 'react'

function Finish({ hits, textLen, time, movieTitle, curIndex, best, setBest }) {

    

    const typedEntries = curIndex.current + 1
    const errors = typedEntries - hits.current
    const minuteTime = (30 - time) / 60 === 0 ? 1/60 : (30 - time) / 60

    const rawWPM = (typedEntries / 5) / minuteTime
    // const netWPM = rawWPM - (errors / minuteTime)
    const accuracy = hits.current / typedEntries

    useEffect(() => {
        
        if(best === '0') return



        if(rawWPM > best){
            setBest(parseInt(rawWPM))
            localStorage.setItem('best', JSON.stringify(rawWPM))
        }


    }, [rawWPM, best, setBest])


    return (
        <>
                {/* <p>Hits: {hits.current}. Errors: {errors} minuteTime: {minuteTime}</p> */}
                {/* <p>WPM: {parseInt(netWPM)}</p> */}
                <p className='finish'>WPM: {parseInt(rawWPM)}</p>
                <p className='finish'>Accuracy: {parseInt(accuracy * 100)}%</p>
                <p className='finish'>Movie: {movieTitle}</p>
        </>
    )
}

export default Finish
