import {useState} from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineEdit} from 'react-icons/ai'
import {BiShow} from 'react-icons/bi'
import {BsInfoCircle} from 'react-icons/bs'
import {MdOutlineAddBox, MdOutlineDelete} from 'react-icons/md'
import { BookModal } from './BookModal'

export const BookInteraction = ({book}) => {
    const [showModal, setShowModal] = useState(false);
    return (
    <div className='flex justify-center gap-x-4'>
    <BiShow className='text-3xl text-blue-800 hover:text-black cursor-pointer' onClick={() => setShowModal(true)}/>
    <Link to={`/books/details/${book._id}`}>
        <BsInfoCircle className='text-2xl text-green-800' />
    </Link>
    <Link to={`/books/edit/${book._id}`}>
        <AiOutlineEdit className='text-2xl text-yellow-600 hover:text-black' />
    </Link>
    <Link to={`/books/delete/${book._id}`}>
        <MdOutlineDelete className='text-2xl text-red-600 hover:text-black' />
    </Link>
    {
        showModal ? <BookModal book={book} onClose={()=>setShowModal(false)}/> : <div></div>
    }
    </div>
    )
}
