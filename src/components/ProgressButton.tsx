import React, { ReactNode, useState } from "react";

interface ProgressButtonProps {
  children?: ReactNode;
  color: string;
  onClick: (count: number) => void;
}
function ProgressButton({
  children = "Success",
  color,
  onClick,
}: ProgressButtonProps) {
  let [count, setCount] = useState(0);
  let handleOnClick = () => {
    let newCount = count + 1;
    setCount(newCount);
    onClick(newCount);
  };

  let button = () => {
    return (
      <>
        <button
          type="button"
          className={`btn btn-${color}`}
          onClick={handleOnClick}
        >
          Pressed {count} times {children}
        </button>
      </>
    );
  };

  return <>{button()}</>;
}

export default ProgressButton;
