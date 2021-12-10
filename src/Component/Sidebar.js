import React from 'react';
import { FaTimes } from 'react-icons/fa';
import '../Style/Sidebar.css';
import { useGlobal } from './context';
import { links, sosmed } from './data';

function Sidebar() {
  const { isSidebar, closeSidebar } = useGlobal();
  return (
    <aside className={`${isSidebar ? 'sidebar show-sidebar' : 'sidebar'}`}>
      <div className='sidebar-header'>
        <h2>DN</h2>
        <button className='sidebar-close' onClick={closeSidebar}>
          <FaTimes />
        </button>
      </div>
      <ul className='links'>
        {links.map((link) => {
          const { id, name, icon, url } = link;
          return (
            <li key={id}>
              <a href={url}>
                {icon}
                {name}
              </a>
            </li>
          );
        })}
      </ul>
      <ul className='socialMedia'>
        {sosmed.map((sosmedIcon) => {
          const { id, icon, url } = sosmedIcon;
          return (
            <li key={id}>
              <a href={url}>{icon}</a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default Sidebar;
