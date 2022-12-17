import '../feed/feed.css'
import Post from '../post/Post'
import Share from '../share/Share'
import { Posts } from '../../dumyData'


export default function Feed() {
  return (
    <div className='feed'>
        <Share/>
        {Posts.map((p)=>(
        <Post key={p.id} post={p}/>

        ))}
        

    </div>
  )
}
