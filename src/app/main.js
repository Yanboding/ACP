import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.js'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'

import Index from './components/index/Index'
import Product from './components/product/Product'
import Project from './components/project/Project'
import Requests from './components/requests/Requests'
import LoginPage from './components/LoginPage/LoginPage'
import UpdateInfo from './components/UpdateInfoPage/UpdateInfo'
import RegisterPage from './components/RegisterPage/RegisterPage'
import CreateProductPage from './components/CreateProductPage/CreateProduct'
import ResetPassword from './components/ResetPassword/ResetPassword'
import Examples from './Examples'
import CreateCommentPage from './components/CreateCommentPage/CreateComment'
import CommentsPage from './components/commentspage/CommentsPage'
import HistreePage from './components/histreepage/HistreePage'
import SearchPage from './components/search/SearchPage'
import LoadingPage from './components/transitionPages/LoadingPage'
import Profile from './components/profile/Profile'

ReactDOM.render(
	<Router history={browserHistory}>

		<Route path='/' component={App} scrollStrategy='imitateBrowser'>
			<IndexRoute component={Index} />
			<Route path='loading' component={LoadingPage} />
			<Route path='create_comment(/:pID/:name)' component={CreateCommentPage} />
			<Route path='product(/:name)' component={Product} />
			<Route path='product?pID=:pID' component={Product} />
			<Route path='project(/:pID)' component={Project} />
			<Route path='requests' component={Requests} />
            <Route path='login' component={LoginPage} />
			<Route path='update' component={UpdateInfo} />
			<Route path='create_product' component= {CreateProductPage} />
            <Route path='register' component= {RegisterPage} />
			<Route path='resetpassword' component= {ResetPassword} />
			<Route path='commentspage(/:pID/:name)' component= {CommentsPage} />
			<Route path='histreepage(/:id)' component= {HistreePage} />
			<Route path='searchpage' component= {SearchPage} />

			<Route path='profile(?username=:username)' component = {Profile} />

			<Route path='*' component={Examples} />
		</Route>

	</Router>,
document.getElementById('root'));
