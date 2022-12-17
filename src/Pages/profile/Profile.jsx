import './profile.css'
import Feed from '../../component/feed/Feed'
import Rightbar from '../../component/rightbar/Rightbar'
import Sidebar from '../../component/sidebar/Sidebar'
import Topbar from '../../component/topbar/Topbar'

export default function Profile() {
    return (<>
        <Topbar />
        <div className='profile'>
            <Sidebar />
            <div className="profileRight">
                <div className="profileRighTop">
                    <div className="profileCover">
                    <img src="/assets/CoverImg2.jpg" alt="" className="profileImg" />
                    <img src="/assets/1.jpg" alt="" className="userImg" />
                    </div>
                </div>
                <div className="prpfileInfo">
                    <h4 className='profileInfoName' >Abdul Musavir</h4>
                    <span className="profileInfoDesc">Hello, my freind!</span>
                </div>
                <div className="profileRightBootom">
                    <Feed />
                    <Rightbar profile/>
                </div>
            </div>
        </div>
    </>
    )
}
