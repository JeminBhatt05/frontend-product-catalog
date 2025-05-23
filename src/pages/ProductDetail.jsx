import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Loader from '../components/Loader'

function ProductDetail() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data)
        setLoading(false)
      })
      .catch(() => {
        setError('Failed to load product details.')
        setLoading(false)
      })
  }, [id])

  if (loading) return <Loader />
  if (error) return <div>{error}</div>

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <Link to="/" className="text-blue-500 underline mb-4 block">← Back to Products</Link>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <img src={product.image} alt={product.title} className="w-full max-h-96 object-contain" />
        <div>
          <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
          <p className="text-xl text-green-600 font-semibold mb-2">${product.price}</p>
          <p className="text-gray-600 mb-4">{product.category}</p>
          <p>{product.description}</p>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
