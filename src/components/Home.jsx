import '@sass/content/home/home.scss';

import React from 'react';

import logo from '../assets/images/logo.svg';

import Header from './Header.jsx';
import { useState, useEffect } from 'react';
import AllArticles from './AllArticles.jsx';
import ShowArticles from './ShowArticles.jsx';
import _, { orderBy } from 'lodash';
import Filter from './Filter.jsx';






function Home() {
	const [articles, setArticles] = useState();
	const [tagSearchbar, setTagSearchbar] = useState('');
	const [tagToSearch, setTagToSearch] = useState('react');
	const [theme, setTheme] = useState('light');
	const [allTag, setAllTag] = useState([]);
	const [selectedTag, setSelectedTag] = useState([]);






	useEffect(() => {
		fetch(`https://dev.to/api/articles?tag=${tagToSearch} `)
			.then((response) => response.json())
			.then((data) => {
				setArticles(data);
				UpdateTags(data);
			});
	}, [tagToSearch]);





	function UpdateTags(articleListe) {
		console.log(articleListe);
		const result = [];
		articleListe.forEach((article) => {
			article.tag_list.forEach((tag) => {
				if (!result.includes(tag)) {
					result.push(tag);
				}
			});
		});
		setAllTag(result);
	}


	function SelectedTag(){

		selected = (e) => {
			e.preventDefault();
			console.log("Hi there, user!");
	}};



	

	function changeField(event) {
		const tempFieldName = event.target.name;
		const test = event.target.value;
		if (tempFieldName === 'tag') {
			setTagSearchbar(test);
		}
	}






	function submitForm(event, tag) {
		event.preventDefault();
		setTagToSearch(tag);
	}





	const toggleTheme = () => {
		if (theme === 'light') {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	};


	




	useEffect(() => {
		document.body.className = theme;
	}, [theme]);





	function OrderBy(event) {
		setArticles(_.orderBy(articles, ['published_timestamp'], [event.target.value]));
	}





	return (
		<>
			<Header />

			<div className={`App ${theme}`}>
				<button onClick={toggleTheme} className="Theme">
					🌞 / 🌚
				</button>
			</div>




			<div className="ais-SortBy">
				<select className="ais-SortBy-select" onChange={OrderBy}>
					<option className="ais-SortBy-option" value="instant_search">
						Filtrer par :{' '}
					</option>
					<option className="ais-SortBy-option" value="asc">
						ordre croissant
					</option>
					<option className="ais-SortBy-option" value="desc">
						ordre décroissant
					</option>
				</select>
			</div>




			<form
				className="searchbar"
				onSubmit={(event) => submitForm(event, tagSearchbar)}>
				<input
					className="search"
					type="text"
					name="tag"
					value={tagSearchbar}
					placeholder="Search for a tag"
					onChange={(event) => changeField(event)}
				/>

				<p className="searched">Searching for "{tagToSearch}" </p>
			</form>




			
			<div className="App">
				<Filter allTag={allTag} selectedTag={selectedTag} setSelectedTag={setSelectedTag} />
			</div>





			{articles && (
				<ShowArticles
					articles={articles}
					tagSearched={tagToSearch}
					OrderBy={setArticles}
					selectedTag={allTag}
				/>
			)}
		</>
	);
}


export default Home;
