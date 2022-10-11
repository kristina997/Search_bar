import React from 'react';
import Search from './components/Search';
import rickandmorty from './rickandmorty';

function App() {
  return (
    <div className="tc bg-green ma0 pa4 min-vh-100">
      <Search details={rickandmorty}/>
    </div>
  );
}

export default App;
