import { Link, useLocation } from 'react-router-dom';

function Navbar() {
  const location = useLocation();
  const pathMatchRoute = route => {
    if (route === location.pathname) {
      return true;
    }
  };
  return (
    <>
      <div className="navbar-custom">
        <Link to="/" className={pathMatchRoute('/') ? 'active' : ''}>
          Home
        </Link>
        <Link
          to="/my-pokemon"
          className={pathMatchRoute('/my-pokemon') ? 'active' : ''}
        >
          My Pokemon
        </Link>
      </div>
    </>
  );
}

export default Navbar;
