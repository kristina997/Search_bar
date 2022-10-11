import React from 'react';

function Card({character}) {
	return(
		<div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
			<img className="br-100 h3 w3 dib" alt={character.name} src={process.env.PUBLIC_URL + character.image} />
			<div>
				<h2>{character.name}</h2>
				<h5>{character.species}</h5>
			</div>
		</div>
	);
}

export default Card;