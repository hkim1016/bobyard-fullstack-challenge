import { useState, useEffect } from 'react';
import axios from 'axios';
import Comment from './components/Comment';

function App() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getAllComments = async () => {
      try {
        const allComments = await axios.get('http://localhost:3000/comments');
        setComments([...allComments.data]);
      } catch (err) {
        console.log('failed to get comments', err);
      }
    }
    getAllComments();
  }, []);

  return (
    <>
      <div className='w-full items-center  h-screen flex flex-col justify-between py-4'>
        <p className='border-b border-black text-xl'>Comments</p>
        <div id='comments' className='w-full items-center flex flex-col gap-2 flex-wrap p-4'>
            <Comment comments={comments} parentId={-1} />
        </div>
      </div>
    </>
  )
}

export default App
