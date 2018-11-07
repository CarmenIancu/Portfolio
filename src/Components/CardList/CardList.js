import React from 'react';
import Card from '../Card/Card';

const CardList = ({projects}) => {
const CardComponent = projects.map((project,i) => {
	return (
		<Card 
		key={i} 
		id={projects[i].id} 
		title={projects[i].title} 
		content={projects[i].content}
		page={projects[i].page}
		repo={projects[i].repo}
		image={projects[i].image}
		skills={projects[i].skills}
		/>
		)
})
	return (
		<div id='projects' className='f3 tc b'>
				{CardComponent}
		</div>
	);
}

export default CardList;