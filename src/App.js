import { useEffect, useRef, useState } from 'react';
import Text from './Text';
import StopWatch from './StopWatch';
import Finish from './Finish';
import { moviesPlots } from './moviesPlots';
import './reset.css'
import './index.css'
import Button from './Button';
import ReplayRoundedIcon from '@mui/icons-material/ReplayRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';


//https://www.speedtypingonline.com/typing-equations
function App() {

  function getRandomItem() {
    const randomIndex = Math.floor(Math.random() * moviesPlots.length);
    return moviesPlots[randomIndex];
  }

  function handleFoward(){
    window.location.reload()
  }

  const movie = useRef(getRandomItem())
  console.log(movie.current)
  const dummyText = movie.current.plot.toLowerCase()

  const textObj = dummyText.split('').map((c, i) => {
    return { char: c, style: 'default', i, charPressed: null }
  })
  const [text, setText] = useState(textObj)
  const textLen = text.length
  const curIndex = useRef(0)
  const hits = useRef(0)

  //stopWatch
  const [time, setTime] = useState(0)
  const [isActive, setIsActive] = useState(false)



  console.log()
  return (
    <div className='main'>
      <p className='title'>TypingRun</p>

      <StopWatch time={time} isActive={isActive} setTime={setTime} />
      <div className='box-title'>
        <Text setText={setText} curIndex={curIndex} isActive={isActive} setIsActive={setIsActive} hits={hits}>
          {text}
        </Text>
      </div>
      
      {/* <p className=''>{!isActive? 'Start Typing to begin!' : 'Run!'}</p> */}
      <div className='buttons'>
        <Button><ReplayRoundedIcon fontSize='large' /></Button>
        <Button handler={handleFoward}><ArrowForwardIosRoundedIcon fontSize='large' /></Button>
        {text.length === curIndex.current && <Finish hits={hits} textLen={textLen} time={time} movieTitle={movie.current.title} />}
      </div>
    </div>
  );
}

export default App;
