import {useRef, useState } from 'react';
import Text from './Text';
import StopWatch from './StopWatch';
import Finish from './Finish';


//https://www.speedtypingonline.com/typing-equations
function App() {
  // const lorem = "non lorem veniam duis et labore nisi."
  const lorem = "non lorem"
  const textObj = lorem.split('').map((c, i) => {
    return {char: c, style: 'default', i}
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
    <div>

      <Text setText={setText} curIndex={curIndex} isActive= {isActive} setIsActive={setIsActive} hits={hits}>
        {text}
      </Text>
      <StopWatch time={time} isActive={isActive} setTime={setTime}/>
      {text.length === curIndex.current && <Finish hits={hits} textLen={textLen} />}
    </div>
  );
}

export default App;
