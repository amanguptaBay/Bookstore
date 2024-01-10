import React, { useEffect, useState } from 'react'
import { BackButton } from '../components/BackButton';
import { Spinner } from '../components/Spinner';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

export const EditBook = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState(true);
  const id = useParams();
  
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true)
    axios.get(`http://localhost:5555/books/${id.id}`)
    .then((response) => {
     const book = response.data
     setTitle(book.title)
     setAuthor(book.author)
     setPublishYear(book.publishYear)
     setLoading(false)
    }).catch((error) => {
     console.log(error); 
     setLoading(false);
   })
 }, [])

  const editBook = () => {
    const data = {
      title,
      author,
      publishYear,
    }
    setLoading(true)

    axios.put(`http://localhost:5555/books/${id.id}`, data)
    .then(() => {
      setLoading(false);
      navigate("/")
    }).catch((error) => {
      alert("Error occured whilst saving book. Please check console")
      console.log(error)
    })


  }


  return (
    <div className='p-4'>
      <BackButton />
      <h1 className='text-3xl my-4'>Edit Book</h1>
      {loading ? <Spinner/> : 
        <div className='flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
          
        <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Book Title</label>
          <input
          className='border-2 border-gray-500 px-4 py-2 w-full'
          type='text' value = {title}
          onChange = {(e) => {setTitle(e.target.value)}}
          ></input>
          </div>

          <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Book Author</label>
          <input
          className='border-2 border-gray-500 px-4 py-2 w-full'
          type='text' value = {author}
          onChange = {(e) => {setAuthor(e.target.value)}}
          ></input>
          </div>

          <div className='my-4'>
          <label className='text-xl mr-4 text-gray-500'>Book Publish Year</label>
          <input
          className='border-2 border-gray-500 px-4 py-2 w-full'
          type='number' value = {publishYear}
          onChange = {(e) => {setPublishYear(e.target.value)}}
          ></input>
          </div>

          <button className='p-2 bg-sky-300 m-8' onClick = {editBook}>
            Save Book to BookStore
          </button>

        </div>
      }
    </div>
  )
}