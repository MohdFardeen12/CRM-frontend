import React from 'react'

const Input = ({ label, type = "text" , onChange , name, ...rest }) => (
  <div>
    <label className="block mb-1 font-medium text-gray-600">{label}</label>
    <input
      type={type}
      onChange={onChange}
      name={name}
      {...rest}
      className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-emerald-400"
    />
  </div>
);


export default Input
