import React, { useEffect, useState } from 'react';

import AllArticles from './AllArticles.jsx';

const Filter = ({ allTag, selectedTag, setSelectedTag }) => {
	console.log(selectedTag);
	return (
		<div className="ListFilter">
			{allTag.map((tag) => (
				<button className={selectedTag === tag ? 'selected' : ''} key={tag} onClick={() => setSelectedTag(tag)} id="btn">
					{tag}
				</button>
			))}
		</div>
	);
};

export default Filter;
