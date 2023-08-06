import { useEffect } from 'react';

const KEY = "c6f98f63"
const invalidKeys = ['Backspace', 'Shift', 'CapsLock', 'Alt', 'Dead', 'F5', 'F12']

function Text({ setText, curIndex, hits, isActive, setIsActive, children, time }) {

    useEffect(() => {
        async function getMoviesPlotText(){
            try{
                const resSearch = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&s=avatar-the-last-airbender`)
                const dataSearch = await resSearch.json()

                const imdbID = dataSearch.Search[0].imdbID

                const res1 = await fetch(`http://www.omdbapi.com/?apikey=${KEY}&i=${imdbID}`)
                const data1 = await res1.json()
                // console.log(data1.Plot)
            }catch(e){
                console.log(e)
            }
        }
        getMoviesPlotText()
    }, [])

    useEffect(() => {
        function stop() {
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
                return item.i === index ? { ...item, style: children.at(index).char === keyPressed ? 'hit' : 'miss', charPressed: keyPressed } : item
            }))
        }

        function callback(event) {

            if (curIndex.current === children.length || time === 0) return
            console.log(event.key)

            if (curIndex.current === 0 && !invalidKeys.includes(event.key) && !isActive) {
                setIsActive((s) => !s)
            }

            if (event.key === "Backspace") {
                if (curIndex.current > 0) {
                    curIndex.current--
                    checkKey(curIndex.current, event.key)
                }
            }
            else {
                if (!invalidKeys.includes(event.key)) {
                    checkKey(curIndex.current, event.key)
                    curIndex.current++
                }
            }
        }

        document.addEventListener("keydown", callback)

        if (curIndex.current === children.length && isActive) {
            stop()
            return
        }
        return () => {
            document.removeEventListener("keydown", callback)
        }
    }, [children, setText, curIndex, isActive, setIsActive, hits, time])

    return (
        <div>
            <h1 className='text-box'>{children.map(c => <span className={`${c.style} ${curIndex.current === c.i? 'blinking' : ''}`} key={c.i}>{c.char === c.charPressed ? c.charPressed : c.char}{''}</span>)}</h1>
        </div>
    );
}

export default Text;
