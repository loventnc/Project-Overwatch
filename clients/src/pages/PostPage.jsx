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
        <div>
            <p>{postInfo.title}</p>
            <div className="flex"><ReactTimeAgo date={postInfo.createdAt} locale="en-US" timeStyle="round"/></div>
            <p>by @{postInfo.author.username}</p>
            {userInfo.id === postInfo.author._id && (
                    <>
                    <Link to={`/community/edit/${postInfo._id}`}>
                        <p>edit this post</p>
                    </Link>
                    <button onClick={handleDelete}>Delete this post</button>
                    </>
                )}
            <img src = {`http://localhost:3000/${postInfo.cover}`} alt="" />
            
            <div dangerouslySetInnerHTML={{__html:postInfo.content}}/> 
        </div>

    )
}