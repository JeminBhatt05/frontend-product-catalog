import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import Loader from '../components/Loader'

function ProductList() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data)
        setLoading(false)
      })
      .catch(err => {
        setError('Failed to load products.')
        setLoading(false)
      })
  }, [])

  if (loading) return <Loader />
  if (error) return <div>{error}</div>

  return (
    <div className="grid gap-4 p-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
      {products.map(product => (
        <Link key={product.id} to={`/product/${product.id}`}>
          <ProductCard product={product} />
        </Link>
      ))}
    </div>
  )
}

export default ProductList
