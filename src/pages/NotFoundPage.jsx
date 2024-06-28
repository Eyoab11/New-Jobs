import React from 'react'
import { Link } from 'react-router-dom';
import { FaExclamationTriangle } from 'react-icons/fa';
const NotFoundPage = () => {
  return (
     <section class="text-center flex flex-col justify-center items-center h-96">
      <FaExclamationTriangle className='text-yellow-400 text-6xl mb-4' />
      <h1 class="text-6xl font-bold mb-4">404 Not Found</h1>
      <p class="text-xl mb-5">This page does not exist</p>
      <Link
        to="/"
        class="text-white bg-green-900 hover:bg-gray-700 rounded-md px-3 py-2 mt-4"
        >Go Back</Link
      >
    </section>
  )
}

export default NotFoundPage;