import { useState } from "react"
import useLocalStorage from "../../components/useLocalStorage";
import useUpdateLogger from "../../components/useUpdateLogger";

const CustomHook = () => {
    const [name, setName] = useLocalStorage('name','');
    useUpdateLogger(name);
    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
        </div>
    )
}

export default CustomHook;