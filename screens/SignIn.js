import signscreen from '../assets/proje_resimler/signScreen.jpg';

export default function SignIn() {
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

          <div className="password-label">
            <label htmlFor="password">Password</label>
          </div>
          <div className="password-text">
            <input id="password" type="password" placeholder="Enter your password" />
          </div>

          <div className="button">
            <button type="submit">Sign in</button>
          </div>
        </form>
      </div>
    </>
  );
}