import { Person, Search,Chat,Notifications } from '@material-ui/icons'
import React from 'react'
import '../topbar/topbar.css'

export default function Topbar() {
    
  return (
    <div className="topbarContainer">
        <div className="topbarLeft">
            <span className='logo'>Social Media</span>
        </div>
        <div className="topbarCenter">
            <Search className='searchIcon'/>
            <input type="text" className='searchInput' placeholder='Search freind, post or vedio' />
        </div>
        <div className="topbarRight">
            <div className="topbarRightLeft">
                <p>Homepage</p>
                <p>Timeline</p>
            </div>
            <div className="topbarRightCenter">
            <div className="topbarIconItem">
                <Person/>
                <span className="topbarBadge">1</span>
            </div>
            <div className="topbarIconItem">
                <Chat/>
                <span className="topbarBadge">4</span>
            </div>
            <div className="topbarIconItem">
                <Notifications/>
                <span className="topbarBadge">3</span>
            </div>
            </div>
            <div className="topbarRightRight">
            <div className="topbarIconItem">
                <img src="/assets/profile.jpg"  className='profilePic' alt="profile" />
                
            </div>
            </div>
        </div>
    </div>
  )
}
