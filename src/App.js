import { useEffect, useRef, useState } from 'react';
import Text from './Text';
import StopWatch from './StopWatch';
import Finish from './Finish';
import { moviesPlots } from './moviesPlots';
import './reset.css'
import './index.css'


//https://www.speedtypingonline.com/typing-equations
function App() {

  function getRandomItem() {
    const randomIndex = Math.floor(Math.random() * moviesPlots.length);
    return moviesPlots[randomIndex];
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

        <StopWatch time={time} isActive={isActive} setTime={setTime} />
      <div className='box-title'>
        <Text setText={setText} curIndex={curIndex} isActive={isActive} setIsActive={setIsActive} hits={hits}>
          {text}
        </Text>
      </div>
      {text.length === curIndex.current && <Finish hits={hits} textLen={textLen} time={time} movieTitle={movie.current.title}/>}
      <p className='title'>TypingRun</p>
    </div>
  );
}

export default App;
