import '../share/share.css';
import { PermMedia,Room,Label,EmojiEmotions } from '@material-ui/icons';
export default function Share({user}) {
  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <img src="/assets/1.jpg" alt="" className="shareProfileImg" />
                <input type="text" placeholder='what you share' className='shareInput' />

            </div>
                <hr className='shareHr' />

            <div className="sharebottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PermMedia htmlColor='tomato' className='shareIcon'/>
                        <span className='shareOptionText'>Audio or Video</span>
                    </div>
                    <div className="shareOption">
                        <Label htmlColor='blue' className='shareIcon'/>
                        <span className='shareOptionText'>Tag</span>
                    </div>
                    <div className="shareOption">
                        <Room htmlColor='green' className='shareIcon'/>
                        <span className='shareOptionText'>Location</span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotions htmlColor='orange' className='shareIcon'/>
                        <span className='shareOptionText'>Feeling</span>
                    </div>

                </div>
                <button className="shareButton">share</button>

            </div>
        </div>

    </div>
    )
}
