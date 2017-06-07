import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getArticles} from '../actions/index';

class ArticlesHome extends Component{
  componentWillMount(){
    this.props.getArticles();  
  }

  render() {
    return(
        <div className='container'>
           Articles Home Page from React !
        </div>
	);
  }
}

function mapStateToProps(state){
  return {articles: state.articles.all } 
}

export default connect(mapStateToProps, {getArticles: getArticles })(ArticlesHome);
