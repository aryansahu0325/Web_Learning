import React from 'react'
import {useParams} from 'react-router-dom'


const ProductDetail = () => {
  const params = useParams()

  return (
    <div>
        <h1>{params.id} Product Detail Page </h1>
    </div>
  )
}

export default ProductDetail    

