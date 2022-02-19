import { Link, useLocation } from 'react-router-dom';

function TopNavbar() {
  const location = useLocation();
  const pathMatchRoute = route => {
    if (route === location.pathname) {
      return true;
    }
  };
  return (
    <>
      <ul>
        <li>
          <Link to="/">Pokedex</Link>
        </li>
        <li style={{ float: 'right' }}>
          <Link
            to="/my-pokemon"
            className={pathMatchRoute('/my-pokemon') ? 'active' : ''}
          >
            My Pokemon
          </Link>
        </li>
        <li style={{ float: 'right' }}>
          <Link to="/" className={pathMatchRoute('/') ? 'active' : ''}>
            Home
          </Link>
        </li>
      </ul>
    </>
  );
}

export default TopNavbar;
