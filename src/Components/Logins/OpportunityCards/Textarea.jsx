import React from 'react'

const Textarea = ({ label, name, onChange, ...rest }) => (
  <div className="md:col-span-2">
    <label className="block mb-1 font-medium text-gray-600">{label}</label>
    <textarea
      rows="4"
      name={name}
      {...rest}
      onChange={onChange}
      className="w-full p-3 border rounded-lg"
    ></textarea>
  </div>
);

export default Textarea
