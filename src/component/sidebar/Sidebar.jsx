import '../sidebar/sidebar.css'
import {Chat, RssFeed,Group, School,Event,Bookmark,VideoCall} from '@material-ui/icons';
import CloseFreind from '../closeFreind/CloseFreind';
import { Users } from '../../dumyData';

export default function Sidebar() {
  return (
    <div className='sidebar'>
        <div className="sidebarWrapper">
          <ul className="sidebarWrapperList">
            <li className="sidebarWrapperListItem">
              <RssFeed className='sidebarIcon' />
              <span className='sidebarItemText'>Feed</span>
              
            </li>
            <li className="sidebarWrapperListItem">
              <Chat className='sidebarIcon' />
              <span className='sidebarItemText'>Chats</span>
              
            </li>
            <li className="sidebarWrapperListItem">
              <School className='sidebarIcon' />
              <span className='sidebarItemText'>School</span>
              
            </li>
            <li className="sidebarWrapperListItem">
              <Event className='sidebarIcon' />
              <span className='sidebarItemText'>Events</span>
              
            </li>
            <li className="sidebarWrapperListItem">
              <Group className='sidebarIcon' />
              <span className='sidebarItemText'>Groups</span>
            </li>
            <li className="sidebarWrapperListItem">
              <Bookmark className='sidebarIcon' />
              <span className='sidebarItemText'>Bookmarks</span>
            </li>
            <li className="sidebarWrapperListItem">
              <VideoCall className='sidebarIcon' />
              <span className='sidebarItemText'>Video</span>
            </li>
            
          </ul>
          <button className="sidebarbutton">Show More</button>
          <hr  className='sidebarhr'/>
          <ul className='sidebarFreindList'>
            {Users.map((u)=>(<CloseFreind key={u.id}  user={u}/>))}
            
            
          </ul>
        </div>
    </div>
  )
}
