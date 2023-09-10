import React from 'react';
import { NavLink } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ImUser } from 'react-icons/im';

const Navbar = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'Books',
    },
    {
      id: 2,
      path: '/categories',
      text: 'Categories',
    },
  ];
  return (
    <header>
      <nav>
        <h1>Bookstore CMS</h1>
        <ul className="nav-list">
          {links.map((link) => (
            <li key={link.id}>
              <NavLink to={link.path} className={({ isActive }) => (isActive ? 'activelink' : undefined)}>
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="avatar">
        <ImUser />
      </div>
    </header>
  );
};

export default Navbar;
