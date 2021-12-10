import React from 'react';
import { FaBars } from 'react-icons/fa';
import { useGlobal } from './context';
import '../Style/Home.css';

function Home() {
  const { openSidebar } = useGlobal();

  return (
    <main>
      <button className='nav-toggle' onClick={openSidebar}>
        <FaBars />
      </button>
    </main>
  );
}

export default Home;
