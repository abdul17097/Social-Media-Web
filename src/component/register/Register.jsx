import "../register/register.css"

export default function Register() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginTitle">Social Media</h3>
                <span className="loginDesc">
                    Connect with freind and the world around you on Social Media.
                </span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="Username" className="loginInput" />
                    <input placeholder="Email" className="loginInput" />

                    <input placeholder="Password" className="loginInput" />
                    <input placeholder="Password again" className="loginInput" />
                    <button className="loginButton">Sign Up</button>
                    <button className="registerButton">Log into Account</button>

                </div>
            </div>
        </div>
    </div>
    )
}
