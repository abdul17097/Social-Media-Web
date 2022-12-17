import "../login/login.css"

export default function Login() {
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
                    <input placeholder="Email" className="loginInput" />
                    <input placeholder="Password" className="loginInput" />
                    <button className="loginButton">Login</button>
                    <span className="loginForgot">Forgot Password?</span>
                    <button className="registerButton">Create a New Account</button>

                </div>
            </div>
        </div>
    </div>
    )
}
