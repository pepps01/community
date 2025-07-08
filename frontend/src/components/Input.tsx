import React from 'react'

type InputProps = {
    type?: string;
    name: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    value?: string;
    className?: string;
    placeholder?: string;
    required?: boolean;
    disabled?: boolean;
    errors?: string | undefined;
    touched?: boolean;
}

const Input: React.FC<InputProps> = ({
    type = "text",
    name,
    onChange,
    onBlur,
    value,
    className,
    placeholder,
    required,
    disabled,
    errors,
    touched
}) => {
    return (
        <div className="mb-4 w-full">
            <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-700 ">
                {name.charAt(0).toUpperCase() + name.slice(1)}
            </label>
            <input
                type={type}
                name={name}
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                className={`border border-gray-300 rounded-md p-2 w-full ${className}`}
                placeholder={placeholder}
                required={required}
                disabled={disabled}
            />

            {errors && touched && (
                <div className="text-red-500 text-sm mt-1">
                    {errors}
                </div>
            )}

        </div>
    )
}

export default Input