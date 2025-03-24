import { useState } from 'react'
import './App.css'
import {products} from "./data.jsx"
import Header from './partials/Header'
import Product from './partials/Product'
import Filter from './partials/Filter'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
      <Header></Header>  
      <Filter/>
      <div className='productsContainer flex grid grid-cols-[repeat(auto-fit,_minmax(100px,_1fr))] gap-4'>
        {
          products?.map((product)=>(
                          
            <Product key={product.id} product={product}/>
          ))
          
        }
      </div>
    </div>
  )
}

export default App
