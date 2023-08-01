import { useEffect, useRef, useState } from 'react';



function App() {
  const lorem = "non lorem veniam duis et labore nisi."
  const textObj = lorem.split('').map((c, i) => {
    return {char: c, style: 'default', i}
  })
  
  const [text, setText] = useState(textObj)
  const target = useRef(0)

  useEffect(() => {
    function checkKey(curIndex, keyPressed){
        if(keyPressed === "Backspace"){
          setText((items) => items.map((item) => {
            return item.i === curIndex ? { ...item, style: 'default' } : item
          }))
          return
        }

        setText((items) => items.map((item) => {
          return item.i === curIndex ? { ...item, style: text.at(curIndex).char === keyPressed ? 'hit' : 'miss' } : item
        }))
      
    }

    function callback(event){
      if(event.key === "Backspace"){
        target.current--
        checkKey(target.current, event.key)
      }
      else{
        checkKey(target.current, event.key)
        target.current++
      }
    }

    document.addEventListener("keydown", callback)

    return () => {document.removeEventListener("keydown", callback)}
  }, [text, setText])

  
  return (
  <div>
    <p>{text.map(c => <span className={c.style} key={c.i}>{c.char}</span>)}</p>
  </div>
  );
}

export default App;
