import React from 'react';

const Button = (props) => {
  const { className, children, ...rest } = props;
  return (
    <button
      className={`
              py-2
              px-6
              rounded-sm
              self-start      
              text-white
              bg-cy-blue
              duration-20
              border-solid border-2 border-transparent
              hover:border-gray-700 hover:bg-cy-blue
              disabled:opacity-50   
              disabled:cursor-not-allowed
              ${className}
            `}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
