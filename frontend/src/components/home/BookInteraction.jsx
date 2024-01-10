import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineEdit} from 'react-icons/ai'
import {BsInfoCircle} from 'react-icons/bs'
import {MdOutlineAddBox, MdOutlineDelete} from 'react-icons/md'

export const BookInteraction = ({book}) => {
  return (
    <div className='flex justify-center gap-x-4'>
    <Link to={`/books/details/${book._id}`}>
        <BsInfoCircle className='text-2xl text-green-800' />
    </Link>
    <Link to={`/books/edit/${book._id}`}>
        <AiOutlineEdit className='text-2xl text-yellow-600 hover:text-black' />
    </Link>
    <Link to={`/books/delete/${book._id}`}>
        <MdOutlineDelete className='text-2xl text-red-600 hover:text-black' />
    </Link>
    </div>
  )
}
