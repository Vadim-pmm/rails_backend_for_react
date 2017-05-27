import React from 'react';
import{Route, IndexRoute } from 'react-router';
import App from './components/App';
import ArticlesHome from './components/ArticlesHome';

export default(
	<Route path "/" component {App}>
	<IndexRoute component {ArticlesHome} />
	</Route>
	)