import React from "react";

const Color = ({ color }) => {
  return (
    <>
      <ul className="colors ps-0">
        {color &&
          color.map((c) => (
            <li key={c?.label} style={{ backgroundColor: `${c?.value}` }}></li>
          ))}
      </ul>
    </>
  );
};

export default Color;
