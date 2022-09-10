import React, { forwardRef } from "react";

const Test2 = (_, refs) => {
  return (
    <div>
      <div ref={refs}>
        <h1>this is a heading</h1>
        <p>this is a paragraph</p>
      </div>
    </div>
  );
};

export default forwardRef(Test2);
