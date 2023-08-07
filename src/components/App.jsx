import {  useEffect, useRef, useState } from 'react';
import Text from './Text';
import StopWatch from './StopWatch';
import Finish from './Finish';
import { moviesPlotsPT, moviesPlots } from './moviesPlots';
import '../assets/styles/reset.css'
import '../assets/styles/index.css'
import Button from './Button';
import ReplayRoundedIcon from '@mui/icons-material/ReplayRounded';

function App() {

  function getRandomItem() {
    const randomIndex = Math.floor(Math.random() * moviesPlotsPT.length);
    return moviesPlotsPT[randomIndex];
  }

  function handleFoward(){
    window.location.reload()
  }

  function handleBestReset(){
    setBest('0')
    handleFoward()
    localStorage.setItem('best', JSON.stringify(0))
  }

  const movie = useRef(getRandomItem()) 
  const dummyText = movie.current.plot

  const textObj = dummyText.split('').map((c, i) => {
    return { char: c, style: 'default', i, charPressed: null }
  })
  const [text, setText] = useState(textObj)
  const textLen = text.length
  const curIndex = useRef(0)
  const hits = useRef(0)

  //stopWatch
  const [time, setTime] = useState(30)
  const [isActive, setIsActive] = useState(false)

  const [best, setBest] = useState(() => {
    const storedValue = parseInt((localStorage.getItem('best')))

    return storedValue ? JSON.parse(storedValue) : 0
  })

  const hiddenInput = useRef(null)
  const box = useRef(null)

  useEffect(() => {
    box.current.addEventListener('click', () => {
      hiddenInput.current.focus()
    })
    
  }, [])

  return (
    <div className='main'>
      <p className='title'>TypingRun</p>
      {!isActive && time !== 0 && textLen !== curIndex.current && <p className='subtitle'>Start Typing to begin!</p>}
      {isActive && <p className='subtitle'>Run!</p>}
      {!isActive && (time === 0 || textLen === curIndex.current) && <p className='subtitle'>Great Job!</p>}
      <input type='text' ref={hiddenInput} className='hiddenInput'/>

      <StopWatch time={time} isActive={isActive} setTime={setTime} />
      <div className='box-title' ref={box}>
        <Text setText={setText} curIndex={curIndex} isActive={isActive} setIsActive={setIsActive} hits={hits} time={time}>
          {text}
        </Text>
      </div>
      
      <div className='buttons'>
        <Button handler={handleFoward}><ReplayRoundedIcon fontSize='large' /></Button>
        {(time === 0 || textLen === curIndex.current) && <Finish hits={hits} textLen={textLen} time={time} movieTitle={movie.current.title} curIndex={curIndex} best={best} setBest={setBest}/>}
      </div>
        
      <div className='best-box'>
        <p>Your highest score: {best} WPM</p>
        <button onClick={handleBestReset} className='btn reset'>Reset</button>
      </div>
    </div>
  );
}

export default App;
