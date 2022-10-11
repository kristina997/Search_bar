import React from 'react';
import Card from './Card';

function SearchList({ filteredCharacters }) {
  const filtered = filteredCharacters.map( character =>  <Card key={character.id} character={character} />); 
  return (
    <div>
      {filtered}
    </div>
  );
}

export default SearchList;