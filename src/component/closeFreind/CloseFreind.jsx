import '../closeFreind/closeFreind.css';
export default function CloseFreind({user}) {
  return (
    <li className="sidebarFreind">
    <img src={user.profilePicture} className='sidebarFreindImg' alt="" />
    <span className="sidebarFreindName">{user.username}</span>
  </li>
  )
}
