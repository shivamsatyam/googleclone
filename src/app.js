import React from 'react'
import {Route,Switch} from "react-router-dom"
import './index.css'

import First from './first'
import Search from './search'
import error from './error'
const App = ()=>{
	return (
		<>
			<Switch>
				<Route exact path='/' component={First}></Route>
				<Route exact path='/search/:search' component={Search}></Route>
				<Route exact path='/search' component={error}></Route>
			</Switch>
		</>
		)
}

export default App;


















































