import React from 'react';

interface InputFieldProps
  extends React.DetailedHTMLProps<
      React.InputHTMLAttributes<HTMLInputElement>,
      HTMLInputElement
    >,
    React.AriaAttributes {
  name: string;
  label: string;
  submitted: boolean;
  requiredMessage: string;
}

const InputField: React.FC<InputFieldProps> = (props) => {
  const { className, label, submitted, requiredMessage, ...inputProps } = props;
  return (
    <label className="flex flex-col text-lg text-gray-800 mb-2">
      {label}:
      <input
        className={`p-2 text-gray-500 focus:outline-none border-2 ${className}`}
        {...inputProps}
      />
      {submitted && !inputProps.value && (
        <span className="text-red-500 mt-2">{requiredMessage}</span>
      )}
    </label>
  );
};

export default InputField;
