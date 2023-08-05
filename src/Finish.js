function Finish({ hits, textLen, time, movieTitle, curIndex }) {

    const typedEntries = curIndex.current + 1
    const errors = typedEntries - hits.current
    // const minuteTime = time/60
    const minuteTime = (30 - time) / 60

    const rawWPM = (typedEntries / 5) / minuteTime
    const netWPM = rawWPM - (errors / minuteTime)
    console.log()
    const accuracy = hits.current / typedEntries

    return (
        <>
            <div className='finish'>

                {/* <p>Hits: {hits.current}. Errors: {errors} minuteTime: {minuteTime}</p> */}
                {/* <p>WPM: {parseInt(netWPM)}</p> */}
            </div>
                <p className='finish'>WPM: {parseInt(rawWPM)} |</p>
                <p className='finish'>Accuracy: {parseInt(accuracy * 100)}% |</p>
            <p className='finish'>Movie: {movieTitle}</p>
        </>
    )
}

export default Finish
