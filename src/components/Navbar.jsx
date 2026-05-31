import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">FOOTBALL<span>CENTRAL</span></div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/news">News</Link></li>
        <li><Link to="/matches">Matches</Link></li>
        <li><Link to="/login" className="btn-join">Join Fan Club</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;