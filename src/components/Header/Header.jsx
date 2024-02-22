import { NavLink, useLocation } from 'react-router-dom';

export const Header = () => {
  const location = useLocation();

  return (
    <div className="navbar bg-base-200">
      <div role="tablist" className="tabs tabs-boxed">
        <NavLink
          className={`tab ${location.pathname === '/' ? 'tab-active' : ''}`}
          to={'/'}
          activeclassname="current"
        >
          Home
        </NavLink>
        <NavLink
          className={`tab ${
            location.pathname === '/tweets' ? 'tab-active' : ''
          }`}
          to={'tweets'}
          activeclassname="current"
        >
          Tweets
        </NavLink>
      </div>
    </div>
  );
};
