// eslint-disable-next-line react/prop-types
export default function Comment({ id, author, text, image, likes, date, parent}) {
    return (
        <div id={`${id}`} key={id} className='flex flex-col border border-black w-96 h-96 justify-between p-3'>
            <div className='flex flex-col overflow-scroll'>
            <p>{author}</p>
            <div className='overflow-scroll'>
                <p>{text}</p>
            </div>
            <img src={image} width='60px' height='60px' alt='image'/>
            </div>
            <div>
            <p>Likes {likes}</p>
            <p>Uploaded: {new Date(date).toDateString()}</p>
            </div>
        </div>
    )
}