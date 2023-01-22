import React from 'react'
import {useParams , useNavigate} from 'react-router-dom'

const ProductsDetails = () => {
    const {childpost}=useParams();
    const navigate = useNavigate();
  return (
    <div>
        <h1>Products details = {childpost}</h1>
        <button className='btn btn-primary' onClick={()=>navigate('/posts')}>Back</button>
    </div>
  )
}

export default ProductsDetails