// eslint-disable-next-line react/prop-types
export default function Comment({ comments, parentId }) {
    console.log(comments);
    return (
        comments.map(comment => {
            if (comment.parent === parentId) {
                console.log(comment.image, comment.image !== '');
                return (
                    <div id={`${comment.id}`} key={comment.id} className='flex flex-col border border-black w-full justify-between p-5'>
                        <div className='flex flex-col overflow-scroll'>
                            <p>{comment.author}</p>
                            <div className='overflow-scroll'>
                                <p>{comment.text}</p>
                            </div>
                            {comment.image !== '' ? (
                                <img src={comment.image} width='60px' height='60px' alt='image'/>
                            ) : (
                                <></>
                            )}
                        </div>
                        <div>
                            <p>Likes {comment.likes}</p>
                            <p>Uploaded: {new Date(comment.date).toDateString()}</p>
                        </div>
                        <div>
                            <Comment comments={comments} parentId={comment.id} />
                        </div>
                    </div>
                )
            }
        })
    )
}