import { useEffect } from "react"

const useUpdateLogger = (value) => {
    useEffect(() => {
        console.log(value)
    })
}

export default useUpdateLogger