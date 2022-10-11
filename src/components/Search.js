import React, { useState } from 'react';
import SearchList from './SearchList';

function Search({ details }) {

  const [searchField, setSearchField] = useState("");
  //const [searchShow, setSearchShow] = useState(false);

  const filteredCharacters = details.filter(
    character => {
      return (
        character
        .name
        .toLowerCase()
        .includes(searchField.toLowerCase())
      );
    }
  );

  const handleChange = e => {
    setSearchField(e.target.value);
    // if(e.target.value===""){ ako zelimo da se lista svih sakrije i da se prikaze samo one koje zelimo
    //     setSearchShow(false);
    //   }
    //   else {
    //     setSearchShow(true);
    //   }
  };

  function searchList() {
  	//if (searchShow) {
	  	return (
	  		<SearchList filteredCharacters={filteredCharacters} />
	  	);
	 // }
  }

  return (
    <section className="garamond">
			<div className="navy georgia ma0 grow">
				<h2 className="f2">Character</h2>
			</div>
			<div className="pa2">
				<input 
					className="pa3 bb br3 grow b--none bg-lightest-blue ma3"
					type = "search" 
					placeholder = "Search Character" 
					onChange = {handleChange}
				/>
			</div>
			{searchList()}
		</section>
  );
}

export default Search;