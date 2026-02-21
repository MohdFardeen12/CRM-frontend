import React from 'react'


const Select = ({ label, options, name, onChange, ...rest }) => (
  <div>
    <label className="block mb-1 font-medium text-gray-600">{label}</label>
    <select
      name={name}
      onChange={onChange}
      {...rest}
      className="w-full p-3 border rounded-lg"
    >
      <option value="">Select</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  </div>
);
 
export default Select
