import React from 'react'
import {BiUserCircle} from 'react-icons/bi'
import {PiBookOpenTextLight} from "react-icons/pi"
import { BookInteraction } from './BookInteraction'

export const BookCard = ({book}) => {
  return (
    <div className="border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow">
                <h2 className="absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg">
                  {book.publishYear}
                </h2>
                <h4 className='my-2 text-gray-500'>{book._id}</h4>
                <div className='flex justify-start items-center gap-x-2'>
                    <PiBookOpenTextLight className='text-red-300 text-2xl' />
                    <h2 className='my-1'>{book.title}</h2>
                </div>
                <div className='flex justify-start items-center gap-x-2'>
                    <BiUserCircle className='text-red-300 text-2xl' />
                    <h2 className='my-1'>{book.author}</h2>
                </div>
                <BookInteraction book={book} />
    </div>
  )
}
