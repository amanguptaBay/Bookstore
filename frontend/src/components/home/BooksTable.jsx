import React from 'react'
import { BookInteraction } from './BookInteraction'

export const BooksTable = ({books}) => {
  return (
    <table className='w-full border-separate border-spacing-2'>
        <thead>
          <tr>
            <th className="border border-slate-600 rounded-md">No</th>
            <th className="border border-slate-600 rounded-md">Title</th>
            <th className="border border-slate-600 rounded-md max-md:hidden">Author</th>
            <th className="border border-slate-600 rounded-md max-md:hidden">Publish Year</th>
            <th className="border border-slate-600 rounded-md">Operations</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
              <tr key={book._id} className="h-8">
                <td className="border border-slate-700 rounded-md text-center">
                  {index + 1}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  {book.title}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  {book.author}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  {book.publishYear}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  <BookInteraction book={book} />
                </td>
              </tr>
          ))
          }
        </tbody>
      </table>
  )
}
