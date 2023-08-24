import React, { useState } from 'react';
import './Navigation.css';


const Navigation = () => {
  const [activeTab, setActiveTab] = useState('About Me'); // State to keep track of the active tab

  const tabs = ['About Me', 'Portfolio', 'Contact', 'Resume']; // List of tab titles

  return (
    <nav className="navigation">
      <ul>
        {tabs.map((tab, index) => (
          <li key={index} className={tab === activeTab ? 'active' : ''}>
            <button onClick={() => setActiveTab(tab)}>
              {tab}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
