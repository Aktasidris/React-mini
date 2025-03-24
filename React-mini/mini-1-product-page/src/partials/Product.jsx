import React from 'react'

export default function Product({product}) {
    const {id,title,price,description,discout,image}=product//distruction
    console.log(product)
  return (
    <div className='product rounded p-2 w-[200px] shadow-sm col-span-2 mx-auto '>
        <img className=' mb-3 w-full h-auto object-cover' 
        src={image} />
        <h3 className='underline'>{title}</h3>
        <p className='text-gray-500 text-sm my-3'>{description}</p>
        <div className='flex justify-between mt-5 mx-2'>
            <span className='text-gray-700'>{price}.00$</span>
            <span className='text-red-600 text-sm mt-1'>-{discout*100}% off</span>
        </div>
    </div>
  )
}
