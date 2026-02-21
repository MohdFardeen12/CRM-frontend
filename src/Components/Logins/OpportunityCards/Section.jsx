import React from 'react'

const Section = ({ title, children }) => (
  <div className="mb-10">
    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
      {title}
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {children}
    </div>
  </div>
);


export default Section
