'use client';

import React from "react";

const App = () => {
  return (
    <header style={{
      backgroundColor: '#1976d2',
      color: 'white',
      padding: '16px 24px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      minHeight: '60px'
    }}>
      <div>
        <h1 style={{ margin: 0, fontSize: '24px' }}>VR System</h1>
      </div>
      <nav style={{ display: 'flex', gap: '20px' }}>
        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Dashboard</a>
        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Perfil</a>
        <a href="#" style={{ color: 'white', textDecoration: 'none' }}>Configurações</a>
      </nav>
    </header>
  );
};

export default App;
