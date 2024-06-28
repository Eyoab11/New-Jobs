import React from 'react'

const Cards = ({ children, bg = 'bg-gray-100' } ) => {
    return (
        <div className={`${bg} p-6 rounded-lg shadow-md`}>  {/*back-tick*/}
    {children}
        </div>
      )
}

export default Cards