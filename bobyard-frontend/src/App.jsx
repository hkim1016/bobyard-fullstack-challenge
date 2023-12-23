import { useState, useEffect, Suspense } from 'react';
import axios from 'axios';

function App() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getAllComments = async () => {
      try {
        // const allComments = await fetch('http://localhost:3000/comments');
        const allComments = await axios.get('http://localhost:3000/comments');
        // const responseData = await comments.json();
        console.log(allComments.data, 123);
        setComments([...allComments.data]);
      } catch (err) {
        console.log('failed to get comments', err);
      }
    }
    getAllComments();
  }, [comments])

  return (
    <>
      <div className='w-full h-screen flex flex-col justify-between py-4'>
        <p className='border-b border-black text-xl'>Comments</p>
        <div className='flex gap-2 flex-wrap'>
          <Suspense fallback={<p>Loading comment...</p>}>
            {comments.map((comment, index) => {
              return (
                <div key={index} className='flex flex-col border border-black w-96 h-96 justify-between p-3'>
                  <div className='flex flex-col overflow-scroll'>
                    <p>{comment.author}</p>
                    <div className='overflow-scroll'>
                      <p>{comment.text}</p>
                    </div>
                    <img src={comment.image} width='60px' height='60px' alt='image'/>
                  </div>
                  <div>
                    <p>Likes {comment.likes}</p>
                    <p>Uploaded: {new Date(comment.date).toDateString()}</p>
                  </div>
                </div>
              )
            })}
          </Suspense>
        </div>
      </div>
    </>
  )
}

export default App
