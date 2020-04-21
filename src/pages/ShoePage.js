import React from "react"
import { useParams, Link } from "react-router-dom"
import { shoes } from './Shoes'
import { useAnalytics } from 'use-analytics'

export default function LaunchShoe() {
  const { slug } = useParams()
  const { track } = useAnalytics()
  const shoe = shoes[slug]

  if (!shoe) {
    return <h2>Not Found!</h2>
  }

  function handlePurchase() {
    track('shoePurchased', {
      name: shoe.name,
      price: shoe.price,
    })
  }

  const { name, img } = shoe

  return (
    <div className='page'>
      <Link to={`/shoes/`}>
        Back to all shoes
      </Link>
      <h1>{name}</h1>
      <div className='product'>
        <img src={img} alt={name} />
        <button onClick={handlePurchase}>
          Buy Shoe
        </button>
      </div>
    </div>
  )
}