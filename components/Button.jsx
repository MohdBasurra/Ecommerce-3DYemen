import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
const Button = ({ color, text, textColor, size,icon }) => { 
  let buttonClasses = `bg-${color} hover:bg-${color}-700 text-${textColor} font-bold py-2 px-4 border-b-4 border-${color}-700 hover:border-${color}-500 rounded`;

  if (size === 'small') {
    buttonClasses += ' w-24 h-8';
  } else if (size === 'medium') {
    buttonClasses += ' w-32 h-10';
  } else if (size === 'large') {
    buttonClasses += ' w-full h-12';
  } else {
    buttonClasses += ' w-[12rem] h-[4rem]';
  }

  return (
    <button className={buttonClasses}>
      {text}<FontAwesomeIcon icon={icon} />
    </button>
  );
};

export default Button;