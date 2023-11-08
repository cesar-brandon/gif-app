import { useState } from "react";

const useCounter = ({initial=0}) => {
  const [counter, setCounter] = useState(initial);

  const increment = () => {
    setCounter(counter + 1);
  };
};

export default useCounter;
