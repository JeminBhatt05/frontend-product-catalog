function ProductCard({ product }) {
  return (
    <div className="border p-4 rounded shadow hover:shadow-md transition">
      <img src={product.image} alt={product.title} className="h-40 object-contain mx-auto mb-2" />
      <h2 className="text-md font-bold mb-1">{product.title}</h2>
      <p className="text-green-600 font-semibold">${product.price}</p>
      <p className="text-sm text-gray-500">{product.category}</p>
    </div>
  )
}

export default ProductCard
