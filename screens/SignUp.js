import signscreen from '../assets/proje_resimler/signupScreen.jpg';

export default function SignUp() {
  return (
    <>
      <div className="background-container">
        <img src={signscreen} alt="Background Picture" />
      </div>
      <div className="empty-box">
        <form>
          <div className="name-label">
            <label htmlFor="name">Name</label>
          </div>
          <div className="name-text">
            <input id="name" type="text" placeholder="Enter your name" />
          </div>
          <div className="mail-label">
            <label htmlFor="mail">Mail</label>
          </div>
          <div className="Mail-text">
            <input id="mail" type="text" placeholder="Enter your mail adress" />
          </div>

          <div className="password-label">
            <label htmlFor="password">Password</label>
          </div>
          <div className="password-text">
            <input id="password" type="password" placeholder="Enter your password" />
          </div>
          <div className="confirm-password-label">
            <label htmlFor="confirm-password">Confirm Password</label>
          </div>
          <div className="confirm-password-text">
            <input id="confirm-password" type="password" placeholder="Enter your password again" />
          </div>

          <div className="button">
            <button type="submit">Sign up</button>
          </div>
        </form>
      </div>
    </>
  );
}