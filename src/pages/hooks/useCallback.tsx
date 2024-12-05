import { useCallback, useState } from "react";
import List from "../../components/List";

const UseCallback = () => {
  const [number, setNumber] = useState<number>(1);
  const [dark, setDark] = useState<boolean>(false);

//   useCallback vs useMemo is that useCallback has acces to the whole function while useMemo only hass access to the return value.....
  const getItems = useCallback((incrementor: number): number[] => {
    return [number + incrementor, number + 1 + incrementor, number + 2 + incrementor]
  },[number]);
  const theme: object = {
    backgroundColor: dark ? "#333" : "#FFF",
    color: dark ? "#FFF" : "#333",
    border: '1px solid red'
  };
  return (
    <div style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Toggle Theme
      </button>
      <List getItems={getItems} />
    </div>
  );
};

export default UseCallback;
