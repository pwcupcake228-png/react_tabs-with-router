import { NavLink, Outlet } from 'react-router-dom';

export const HomeLayout: React.FC = () => {
  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `navbar-item ${isActive ? 'is-active' : ''}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/tabs"
              className={({ isActive }) =>
                `navbar-item ${isActive ? 'is-active' : ''}`
              }
            >
              Tabs
            </NavLink>
          </div>
        </div>
      </nav>

      <div className="section">
        <div className="container">
          <Outlet />
        </div>
      </div>
    </>
  );
};
