import React, { useEffect, useState } from 'react'
import { BackButton } from '../components/BackButton';
import { Spinner } from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

export const DeleteBook = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const id = useParams()

  const deleteBook = () => {
    setLoading(true)
    axios.delete(`http://localhost:5555/books/${id.id}`)
    .then((response) => {
      setLoading(false)
      navigate("/")
     }).catch((error) => {
      setLoading(false);
      alert("Error occured whilst saving book. Please check console")
      console.log(error); 
    })
  }

  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3x1 my-4'>Delete Book</h1>
      {loading ? <Spinner/> : ""}
      <div className='flex flex-col border-2 border-sky-400 rounded-x1 w-[600px] p-4 mx-auto'>
        <h3 className = "text-2x1"> Are you sure you want to delete this book?</h3>
        <button 
        onClick = {deleteBook}
        className = "p-4 bg-red-600 text-white m-8 w-full"
        >Yes. Delete it!</button>
      </div>
    </div>
  )
}
