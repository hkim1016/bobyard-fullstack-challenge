import { useState, useEffect, useRef, createRef } from 'react';
import axios from 'axios';
import Comment from './components/comment';

function App() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const getAllComments = async () => {
      try {
        // const allComments = await fetch('http://localhost:3000/comments');
        const allComments = await axios.get('http://localhost:3000/comments');
        // const responseData = await comments.json();
        setComments([...allComments.data]);
      } catch (err) {
        console.log('failed to get comments', err);
      }
    }
    getAllComments();
  }, [comments]);

  // useEffect(() => {
    // comments.map((comment) => {
    //   if (comment.parent !== -1) {
    //     const parentComment = document.getElementById(comment.parent);
    //     console.log(123, comment.parent, parentComment);
    //     const childComment = (
    //       <div id={comment.id} key={comment.id} className='flex flex-col border border-black w-96 h-96 justify-between p-3'>
    //         <div className='flex flex-col overflow-scroll'>
    //           <p>{comment.author}</p>
    //           <div className='overflow-scroll'>
    //             <p>{comment.text}</p>
    //           </div>
    //           <img src={comment.image} width='60px' height='60px' alt='image'/>
    //         </div>
    //         <div>
    //           <p>Likes {comment.likes}</p>
    //           <p>Uploaded: {new Date(comment.date).toDateString()}</p>
    //         </div>
    //       </div>
    //     )
    //     if (parentComment !== null) {
    //       // parentComment.appendChild(childComment);
    //     }
    //   }
    // })
  // });

  return (
    <>
      <div className='w-full items-center  h-screen flex flex-col justify-between py-4'>
        <p className='border-b border-black text-xl'>Comments</p>
        <div id='comments' className='w-full items-center flex flex-col gap-2 flex-wrap'>
          {/* <Suspense fallback={<p>Loading comment...</p>}> */}
            {comments.map((comment) => {
                  return <Comment key={comment.id} id={comment.id} author={comment.author} text={comment.text} image={comment.image} likes={comment.likes} date={comment.date} parent={comment.parent} />
            })}
            {/* {comments.map((comment) => {
                if (comment.parent !== -1) {
                  const parentComment = document.getElementById(comment.parent);
                  console.log(comment.parent, document.getElementById(comment.id));
                  const childComment = (
                    <div id={comment.id} key={comment.id} className='flex flex-col border border-black w-96 h-96 justify-between p-3'>
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
                  parentComment.appendChild(childComment);
                }
            })} */}

          {/* </Suspense> */}
        </div>
      </div>
    </>
  )
}

export default App
