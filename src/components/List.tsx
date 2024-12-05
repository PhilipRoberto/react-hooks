import { useEffect, useState } from "react"

const List = ({getItems}) => {
    const [items, setItems] =  useState([]);
    useEffect(()=> {
        setItems(getItems(1));
        console.log("Updating Items");
    }, [getItems])
    return (
        items.map((item) => {
            return <div key={item}>
                {item}
            </div>
        })
    )
}

export default List;