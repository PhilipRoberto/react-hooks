import { useEffect, useRef, useState } from "react";

const UseRef = () => {
    const [name, setName] = useState(() => {
        return ''
    })
    const inputRef = useRef()
    const prevName = useRef('')

    const focus = () => {
        inputRef.current.focus()
    }

    useEffect (() => {
        prevName.current = name
    }, [name]);
    return (
        <div className="use-ref">
            <input ref={inputRef} value={name} onChange={e => setName(e.target.value)} />
            <div>
                My name is {name} and it used to be {prevName.current}
            </div>
            <button onClick={focus}>Focus</button>
        </div>
    )
}

export default UseRef;