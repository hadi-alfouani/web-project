import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className="login-wrapper">
      <div className="login-container">
        <div className="login-box">
          <div className="logo">FOOTBALL<span>CENTRAL</span></div>
          <h2>Welcome Back, Fan!</h2>
          <p>Login to access exclusive content</p>

          <form onSubmit={(e) => e.preventDefault()}>
            <div className="input-group">
              <label htmlFor="email">Email Address</label>
              <input type="email" id="email" placeholder="Enter your email" required />
            </div>
            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" placeholder="Enter your password" required />
            </div>
            <div className="form-options">
              <label><input type="checkbox" /> Remember me</label>
              <a href="#">Forgot Password?</a>
            </div>
            <button type="submit" className="login-btn">Login</button>
          </form>

          <div className="login-footer">
            <p>Don't have an account? <a href="#">Sign Up here</a></p>
            <Link to="/" className="back-home">← Back to Home</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
