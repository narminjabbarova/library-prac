import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { BASE_URL } from '../../constants/script'

const Details = () => {

  const [product, setProduct] = useState([])
  const {id} = useParams()
  const getproduct = async()=>{
    const res = await axios.get(`${BASE_URL}/products/${id}`)
    setProduct(res.data)
  }

  useEffect(() => {
    getproduct()
  }, [id])
  
  return (
    <>
    {
      product &&
      <div className="product">
        <img src={product.image} alt={product.title} />
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <p>{product.price}</p>
      </div>
    }
    </>
  )
}

export default Details