import {useEffect, useState, useContext} from 'react'
import {useParams} from 'react-router-dom'
import ReactTimeAgo from 'react-time-ago'
import {Link} from 'react-router-dom'
import { UserContext } from '../contexts/UserContext'

export default function PostPage(){
    const {userInfo} = useContext(UserContext)
    const [postInfo, setPostInfo] = useState(null)
    const {id} = useParams()
    useEffect(() => {
        fetch(`http://localhost:3000/community/posts/${id}`)
            .then(response => {
                response.json().then(postInfo => {
                    setPostInfo(postInfo);
                })
            })
    },[])

    const handleDelete = async () => {
        const isConfirmed = window.confirm('Are you sure you want to delete this post?');
    
        if (!isConfirmed) {
            return; // If not confirmed, do nothing
        }
    
        try {
            const response = await fetch(`http://localhost:3000/community/posts/${postInfo._id}`, {
                method: 'DELETE',
            });
    
            if (response.ok) {
                // Redirect to the post list or another page after successful deletion
                window.location.href = '/community/posts';
            } else {
                console.error('Failed to delete post');
            }
        } catch (error) {
            console.error('Error deleting post', error);
        }
    };
    
    
    if (!postInfo) return '';


    return (
        // <div className='flex w-screen'>
        //     <div>
        //         <div className='flex justify-center w-1/2' >
        //             <div className='mt-16'>
        //                 <div className='text-6xl font-bold'>
        //                     {postInfo.title}
        //                 </div>
        //                 <div className="flex justify-center mt-5">
        //                     <p>by @{postInfo.author.username}</p>
        //                     
        //                     
        //                 </div>

                        
        //                 
        //             </div>
        //         </div>


        //         <div className='w-1/2'>
        //             <img src = {`http://localhost:3000/${postInfo.cover}`} alt="" />
        //             <div className="whitespace-normal break-words" dangerouslySetInnerHTML={{__html:postInfo.content}}/> 
        //         </div>

        //     </div>
        // </div>
        <div className="flex flex-col items-center w-screen p-6 mt-10 bg-[#DDF2FD]">
            <div className='text-5xl font-bold mb-4'>
                {postInfo.title}
            </div>
            <div className='flex text-gray-600'>
                <span>{postInfo.author.username}</span>
                <span className="mx-2">·</span>
                <ReactTimeAgo date={postInfo.createdAt} locale="en-US" timeStyle="round" />
            </div>
            <div className='mt-3 flex justify-center gap-3'>
                {userInfo.id === postInfo.author._id && (
                <>
                    <Link to={`/community/edit/${postInfo._id}`}>
                    <button className='btn btn-success'>Edit this post</button>
                    </Link>
                    <button onClick={handleDelete} className='btn btn-warning btn-outline'>Delete this post</button>
                </>
                )}
            </div>
            <div className='w-full md:w-1/2 mt-6'>
                <img src={`http://localhost:3000/${postInfo.cover}`} alt="" className="w-full h-auto rounded-lg shadow" />
            </div>
            <div className="mt-6 max-w-prose whitespace-normal break-words">
                <div dangerouslySetInnerHTML={{ __html: postInfo.content }} />
            </div>
        </div>

        
    )
}