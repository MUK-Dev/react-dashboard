import React from 'react';

const Button = ({ bgColor, color, bgHoverColor, size, text, borderRadius }) => {
  return (
    <div
      type='button'
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={`text-${size} w-fit p-3 hover:drop-shadow-xl hover:bg-${bgHoverColor} cursor-pointer`}
    >
      {text}
    </div>
  );
};

export default Button;
