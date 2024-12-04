import { useEffect, useState } from "react";

/* const UseEffect = () => {
  const [resourceType, setResourceType] = useState(() => {
    return "posts";
  });
  const [items, setItems] = useState(() => {
    return []
  })
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
  }, [resourceType]);
  return (
    <>
      <div className="use-effect">
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
      <h1>{resourceType}</h1>
      <div>
        {items.map((item) => {
            return <pre>
                {JSON.stringify(item)}
            </pre>
        })}
      </div>
    </>
  );
}; */

/*const UseEffect = () => {
    const [windowWidth, setWindowWidth] = useState(() => {
        return window.innerWidth
    })
    const handleResize = () => {
        setWindowWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    })
    return (
        <div>
            {windowWidth}
        </div>
    )
}*/

const UseEffect = () => {
  const [resourceType, setResourceType] = useState(() => {
    return "posts";
  });
  useEffect(() => {
    console.log('resource changed')
    return () => {
        console.log('return from resource changed')
    }
  }, [resourceType]);
  return (
    <>
      <div>
        <button onClick={() => setResourceType("posts")}>Posts</button>
        <button onClick={() => setResourceType("users")}>Users</button>
        <button onClick={() => setResourceType("comments")}>Comments</button>
      </div>
    </>
  );
};

export default UseEffect;
