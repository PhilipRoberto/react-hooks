import { useEffect, useMemo, useState } from "react";

const UseMemo = () => {
  const [number, setNumber] = useState((): number => {
    return 0;
  });
  const [dark, setDark] = useState((): boolean => {
    return false;
  });
  //   useMemo for its performance benefits - memory caching amd referential equality
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);
  const themeStyles = useMemo(() => {
    return {
      backgroundColor: dark ? "black" : "white",
      color: dark ? "white" : "black",
    };
  }, [dark]);
  useEffect(() => {
    console.log("Theme Changed");
  }, [themeStyles]);
  return (
    <>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Change Theme
      </button>
      <div style={themeStyles}>{doubleNumber}</div>
    </>
  );
};

const slowFunction = (num: number): number => {
  console.log("Calling Slow Function");
  for (let i = 0; i <= 1000000000; i++) {}
  return num * 2;
};

export default UseMemo;
