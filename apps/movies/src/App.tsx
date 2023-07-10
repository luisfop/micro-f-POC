import React from 'react';
// import logo from './logo.svg';
import './App.css';
import AppShell from 'ui';

function App() {

  return (
    <div className="">
      <AppShell title='Movies' colorScheme='dark' routes={[
        {
          path: '/',
          element: () => <div>Home page!</div>
        },
        {
          path: '/playlist',
          element: () => <div>Playlist page!</div>
        }
      ]}
        navLinks={[
          {
            label: 'Home',
            path: '/'
          },
          {
            label: 'playlist',
            path: '/Playlist'
          }
        ]}
      />
    </div>
  );
}

export default App;
