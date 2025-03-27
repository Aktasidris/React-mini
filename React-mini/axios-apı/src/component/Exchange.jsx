import React, { useState } from 'react'

import axios from 'axios';
export default function Exchange() {
    const[fromcurrency,setfromcurrency]=useState('USD')
    const[tocurrency,settocurrency]=useState('EUR')
    const[amount,setamount]=useState(1)
    const[result,setresult]=useState()
    
    const baseurl="https://api.freecurrencyapi.com/v1/latest"
    const apiKey = import.meta.env.VITE_API_KEY

    const exchange = async()=>{
        const res= await axios.get(`${baseurl}?apikey=${apiKey}&base_currency=${fromcurrency}`)
        let result=(res.data.data)[tocurrency]*amount
        setresult(result.toFixed(2))
    }
    

  return (
    <div className=' flex-col m-auto mt-30  bg-gray-600 w-[450px] border-3 border-gray-800 shadow-2xl rounded-md '>
        <h3 className='font-bold  p-3 text-white'>Convert Currency {fromcurrency} From {tocurrency}</h3>
        <div className='flex'>
            <div>
                <input type="number" value={amount} onChange={(e)=>setamount(e.target.value)} className='p-2 bg-white rounded-lg m-3 w-[100px]'/>
                <select  onChange={(e)=>setfromcurrency(e.target.value)} >
                    <option >USD</option>
                    <option >EUR</option>
                    <option >CAD</option>
                </select>
            </div>
            <div className='text-2xl my-auto mx-4 font-bold'>
                ={'>'}
            </div>
            <div>
                <select name="tocurrencyselect"  onChange={(e)=>settocurrency(e.target.value)}>
                    <option >EUR</option>
                    <option >USD</option>
                    <option >CAD</option>
                </select>
                <input type="number" value={result} onChange={(e)=>setresult(e.target.value)} className='p-2 bg-white rounded-lg m-3 w-[100px]' />
            </div>
        </div>
        <div className='flex justify-center pb-4'>
            <button className='px-8 py-2 rounded-sm hover:bg-opacity-50 bg-blue-800' onClick={exchange}>Convert</button>

        </div>
        {/* <hr className='text-white border-1'/> */}
        {/* <div>
            <h3 className='text-white flex-row ms-3 mt-3 text-sm'>Other Currency</h3>
            <ul>
                <li>
                    <span>usd:</span>
                    <span>35.00</span>
                </li>
            </ul>
        </div> */}


    </div>
  )
}
