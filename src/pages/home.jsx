import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <header className="hero">
      <div className="hero-content">
        <h1>Experience the Passion of the Game</h1>
        <p>Get the latest scores, news, and highlights from the world of football.</p>
        <Link to="/news" className="cta-button">Read Latest News</Link>
      </div>
    </header>
  );
};

export default Home;