import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import ReactTimeAgo from 'react-time-ago'
import {Link} from 'react-router-dom'

export default function PostPage(){
    
    
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

    if (!postInfo) return '';


    return (
        <div>
            <p>{postInfo.title}</p>
            <div className="flex"><ReactTimeAgo date={postInfo.createdAt} locale="en-US" timeStyle="round"/></div>
            <p>by @{postInfo.author.username}</p>
            <Link to={`/community/edit/${postInfo._id}`}>
                <p>edit this post</p>
            </Link>
            <img src = {`http://localhost:3000/${postInfo.cover}`} alt="" />
            
            <div dangerouslySetInnerHTML={{__html:postInfo.content}}/> 
        </div>

    )
}