import React from 'react'
import { BookCard } from './BookCard'

export const BooksCard = ({books}) => {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-2 xl:grod-cols-4'>
        {books.map((book, index) => (
              <BookCard key={book._id} book={book} />
          ))
        }
    </div>
  )
}
