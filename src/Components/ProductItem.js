import React from 'react'

export default function ProductItem({ product }) {
    return (
        <div className='w-[32%] bg-white hover:bg-blue-100 cursor-pointer p-5 flex rounded-lg shadow'>
            <div className='w-1/5'>
                <img src={product.thumbnail} className='w-full' />
            </div>
            <div className='w-4/5'>
                <p className="text-md font-bold">{product.title}</p>
                <p className="text-sm font-medium">{product.category}</p>
                <p className="text-xl text-right">{`$ ${product.price}`}</p>
            </div>
        </div>
    )
}
