import React from "react";
import { useState, useEffect } from "react";

const Test = () => {
  const data = useRef(null);
  const [isData, setIsData] = useState(false);
  const submitHandler = (e) => {
    setIsData(!isData);
    e.preventDefault();
  };
  return (
    <div>
      <form action="">
        <label htmlFor="name">Name</label>
        <input type="text" id="name" ref={data} />
        <button onClick={submitHandler}>Submit</button>
      </form>
      <h1>{data.current && data.current.value}</h1>
    </div>
  );
};

export default Test;
