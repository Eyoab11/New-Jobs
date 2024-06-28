import React from 'react'
import { ClipLoader } from 'react-spinners';

const override = {
    display: 'block',
    margin: '100px auto'
}


const Spinner = ({ loading }) => {


  return (
    <ClipLoader 
    color = '#012e1f' 
    loading= {loading}
    cssOverride={override}
    size={150}
    />
  )
}

export default Spinner;