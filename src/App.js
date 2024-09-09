import react, { useState, useEffect } from 'react'
import axios from 'axios';
import './App.css';
import ProductItem from './Components/ProductItem';
import ProductItemTab from './Components/ProductItemTab';

function App() {

  const [isLoading, setIsLoading] = useState(true)
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get('https://dummyjson.com/products').then((result) => {
      setProducts(result.data)
      setIsLoading(false)
    }).catch((err) => {
      setProducts([])
      setIsLoading(false)
    })
  }, [])


  return (
    <div className="bg-gray-300 flex justify-center w-100 h-full">
      <div className='w-3/4 py-5'>
        <h1 className='text-3xl mb-5 font-bold text-center '>Products</h1>
        {isLoading ?
          <h1 className='text-sm mb-5  text-center '>{`Loading Products ...`}</h1>
          :
          products?.products.length > 0 ?
            <table className='table '>
              <h1 className='text-sm mb-5  text-center '>{` Showing ${products?.total} Products`}</h1>
              <tbody className='flex flex-wrap gap-3'>
                {products?.products?.map((item) => (
                  //<ProductItem product={item} /> //To show items graphically
                   <ProductItemTab product={item} />
                ))}
              </tbody>
            </table>
            :
            <h1 className='text-sm mb-5  text-center '>{`Sorry No products found!`}</h1>
        }
      </div>
    </div>
  );
}

export default App;
