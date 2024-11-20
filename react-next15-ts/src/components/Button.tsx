import React from 'react';

interface ButtonProps
  extends React.DetailedHTMLProps<
      React.ButtonHTMLAttributes<HTMLButtonElement>,
      HTMLButtonElement
    >,
    React.AriaAttributes {}

const Button: React.FC<ButtonProps> = (props) => {
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
