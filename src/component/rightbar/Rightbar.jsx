import '../rightbar/rightbar.css'
import { Users } from '../../dumyData'
import Online from '../online/Online'
export default function Rightbar({ Profile }) {
  const HomeRightbar = () => {
    return(
      <>
      <div className="birthdayContainer">
          <img src="/assets/bd.png" className='birthdayImg' alt="" />
          <span className="birhtdayText"><b>Umar</b> and <b>3 other freinds</b> birthday today.</span>
        </div>

        <img src="/assets/profile.jpg" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Freinds</h4>
        <ul className="rightbarFreindList">
          {Users.map((u) => (<Online key={u.id} user={u} />))}

        </ul>
      </>
    )

  }
  const ProfileRightbar = () => {
      return(
        <>
        <div className="rightbarFeindList">
          <h4 className='rightbarTitle'>Hey its profile</h4>
          <div className="rightbarInfo">
            <div className="rightbarInfoItem">
              <span className="rightbarInfoKey">City</span>
              <span className="rightbarInfoValue">Pakistan</span>
            </div>
            <div className="rightbarInfoItem">
              <span className="rightbarInfoKey">From</span>
              <span className="rightbarInfoValue">Peshawer</span>
            </div>
            <div className="rightbarInfoItem">
              <span className="rightbarInfoKey">RelationShip</span>
              <span className="rightbarInfoValue">Single</span>
            </div>
          </div>
          <h4 className='rightbarTitle'>User freinds</h4>
          <div className="rightbarFollowings">
            <div className="rightbarFollowing">
              <img src="/assets/3.jpg" alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollwoingName">Inam Khan</span>
            </div>
            <div className="rightbarFollowing">
              <img src="/assets/3.jpg" alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollwoingName">Inam Khan</span>
            </div>
            <div className="rightbarFollowing">
              <img src="/assets/3.jpg" alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollwoingName">Inam Khan</span>
            </div>
            <div className="rightbarFollowing">
              <img src="/assets/3.jpg" alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollwoingName">Inam Khan</span>
            </div>
            <div className="rightbarFollowing">
              <img src="/assets/3.jpg" alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollwoingName">Inam Khan</span>
            </div>
            <div className="rightbarFollowing">
              <img src="/assets/3.jpg" alt="" className="rightbarFollowingImg" />
              <span className="rightbarFollwoingName">Inam Khan</span>
            </div>  
            </div>
          </div>

        </>
      )
  }
  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        <ProfileRightbar/>
        <HomeRightbar/>

      </div>
    </div>

  )
}
