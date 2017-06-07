import React from 'react';
import {Route} from 'react-router';
import App from './components/App';
import ArticlesHome from './components/ArticlesHome';

export default(
	<Route path="/" component={App}>
	<Route exact component={ArticlesHome} />
	</Route>
	)
