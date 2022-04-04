import React, { useRef } from "react";
import Button from "./Button";

const ImperativeHandle = () => {
    const buttonRef = useRef(null);

  return (
    <div>
        <h2 className="secondTitle">Use Imperative</h2>
        <button
        onClick={() => {
          buttonRef.current.alterToggle();
        }}
      >
        Button From Parent
      </button>
      <Button ref={buttonRef} />
    </div>
  )
}

export default ImperativeHandle