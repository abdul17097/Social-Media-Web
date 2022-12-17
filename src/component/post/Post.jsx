import { MoreVert } from '@material-ui/icons'
import '../post/post.css'
import { Users } from '../../dumyData';
import { useState } from 'react';



export default function Post({post}) {
    const [like,setLike] = useState(post.like);
    const [islike,setIslike] =useState(false);
    const likeHandler = ()=>{
        setLike(islike? like-1:like+1)
        setIslike(!islike)
    }
  return (
    <div className='post'>
        <div className="postWraper">
            <div className="postTopper">
                <div className="postTopLeft">
                    <img src={post.photo}className='postProfileImg' alt="" />
                    <span className='postUserName'>{Users.filter((u)=> u.id === post.userId)[0].username}</span>
                    <span className="postDate">{post.data}</span>
                </div>
                <div className="postTopRight">
                    <MoreVert/>
                </div>

            </div>
            <div className="postCenter">
                <span className="postText">{post.desc}</span>
                <img src={post.photo} className='postImg' alt="" />

            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src="/assets/like.png" className='Icon' onClick={likeHandler} alt="" />
                    <img src="/assets/heart.png" className='Icon' alt="" />
                    <span className="postLikeCounter">{like}</span>

                </div>
                <div className="postBottomRight">
                    <span className="postComment">{post.comment} comment</span>
                </div>

            </div>

        </div>
    </div>
  )
}
