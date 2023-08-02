import { useEffect } from 'react';



function Text({ setText, curIndex, hits, isActive, setIsActive, children }) {

    

    useEffect(() => {
        function stop(){
            setIsActive((s) => !s)
        }

        function checkKey(index, keyPressed) {
            if (keyPressed === "Backspace") {
                setText((items) => items.map((item) => {

                    if (item.i === index && item.style === 'hit') {
                        hits.current--
                    }

                    return item.i === index ? { ...item, style: 'default' } : item
                }))
                return
            }

            setText((items) => items.map((item) => {
                if (item.i === index && children.at(index).char === keyPressed) {
                    hits.current++
                }
                return item.i === index ? { ...item, style: children.at(index).char === keyPressed ? 'hit' : 'miss' } : item
            }))
        }

        function callback(event) {

            if (curIndex.current === children.length) return
            

            if (curIndex.current === 0 && event.key !== "Backspace" && !isActive) {
                setIsActive((s) => !s)
            }

            if (event.key === "Backspace") {
                if (curIndex.current > 0) {
                    curIndex.current--
                    checkKey(curIndex.current, event.key)
                }
            }
            else {
                checkKey(curIndex.current, event.key)
                curIndex.current++
            }
        }

        document.addEventListener("keydown", callback)
        
        if (curIndex.current === children.length && isActive){
            stop()
            return 
        } 
        return () => {
            document.removeEventListener("keydown", callback)
        }
    }, [children, setText, curIndex, isActive, setIsActive, hits])

    return (
        <div>
            <h1>{children.map(c => <span className={c.style} key={c.i}>{c.char}</span>)}</h1>
        </div>
    );
}

export default Text;
