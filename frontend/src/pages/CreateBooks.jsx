import React, { useState } from 'react'
import { BackButton } from '../components/BackButton';
import { Spinner } from '../components/Spinner';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const CreateBooks = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [publishYear, setPublishYear] = useState('');
  const [loading, setLoading] = useState('');
  
  const navigate = useNavigate();

  const saveBook = () => {
    const data = {
      title,
      author,
      publishYear,
    }
    setLoading(true)

    axios.post("http://localhost:5555/books", data)
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
      <h1 className='text-3x1 my-4'>Create Book</h1>
      {loading ? <Spinner/> : ""}
      <div className='flex flex-col border-2 border-sky-400 rounded-x1 w-[600px] p-4 mx-auto'>
        
      <div className='my-4'>
        <label className='text-x1 mr-4 text-gray-500'>Book Title</label>
        <input
        className='border-2 border-gray-500 px-4 py-2 w-full'
        type='text' value = {title}
        onChange = {(e) => {setTitle(e.target.value)}}
        ></input>
        </div>

        <div className='my-4'>
        <label className='text-x1 mr-4 text-gray-500'>Book Author</label>
        <input
        className='border-2 border-gray-500 px-4 py-2 w-full'
        type='text' value = {author}
        onChange = {(e) => {setAuthor(e.target.value)}}
        ></input>
        </div>

        <div className='my-4'>
        <label className='text-x1 mr-4 text-gray-500'>Book Publish Year</label>
        <input
        className='border-2 border-gray-500 px-4 py-2 w-full'
        type='number' value = {publishYear}
        onChange = {(e) => {setPublishYear(e.target.value)}}
        ></input>
        </div>

        <button className='p-2 bg-sky-300 m-8' onClick = {saveBook}>
          Save Book to BookStore
        </button>

      </div>
    </div>
  )
}