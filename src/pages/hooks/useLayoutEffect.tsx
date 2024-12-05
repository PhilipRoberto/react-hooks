import { useEffect, useLayoutEffect, useState } from "react"
import ModalPopUp from "../../components/ModalPopUp";

const UseLayoutEffect = () => {
    const [count, setCount] = useState(0);
    useLayoutEffect(() => {
        console.log(count)
    }, [count])
    return (
        <div>
            <button onClick={() => setCount(currentCount => currentCount - 1)}>-</button>
            <span>
                {count}
            </span>
            <button onClick={() => setCount(currentCount => currentCount + 1)}>+</button>
            <ModalPopUp />
        </div>
    )
}

export default UseLayoutEffect