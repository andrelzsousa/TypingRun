function Finish({hits, textLen, time, movieTitle}) {


    const errors = textLen - hits.current
    const minuteTime = time/60

    const rawWPM = (textLen/5)/minuteTime
    // const netWPM = rawWPM - (errors/minuteTime)

    const accuracy = hits.current/textLen

    return (
        <div className='finish'>

            {/* <p>Hits: {hits.current}. Errors: {errors}</p> */}
            {/* <p>NET WPM: {parseInt(netWPM)}</p> */}
            <p>WPM: {parseInt(rawWPM)}</p>
            <p>Accuracy: {parseInt(accuracy * 100)}%</p>
            <p>Movie: {movieTitle}</p>
        </div>
    )
}

export default Finish
