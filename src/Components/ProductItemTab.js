import React from 'react'

export default function ProductItemTab({ product }) {
    return (
        <tr className='w-full bg-white hover:bg-blue-200 cursor-pointer'>
            <td className='border border-black w-[10%]'>
                <img src={product.thumbnail} className='w-full' />
            </td>
            <td className="border border-black w-[20%] text-center text-md font-bold">{product.title}</td>
            <td className="border border-black w-[50%] text-sm p-2 font-medium">{product.description}</td>
            <td className="border border-black  w-[20%] text-center text-xl ">{`$ ${product.price}`}</td>
        </tr>
    )
}
