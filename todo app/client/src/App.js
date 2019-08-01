import React, {Component} from 'react';
import List from './List';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Navbar  from "./components/Navbar";
import Landing from "./components/Landing";
import Login from "./components/Login";
import Register from "./components/Register";
import Profile from "./components/Profile";


class App extends Component {

	render() {
		return (
			<Router>
				<div className="App">
					<Navbar/>
					<Router exact path="/" component = {Landing} />
					<div className="container">
					<Router exact path="/register" component = {Register} />
					<Router exact path="/login" component = {Login} />
					<Router exact path="/profile" component = {Profile} />
					</div>
				</div>
			</Router>
		)
	}
}

// function App() {
//   return ( 
//             <div className="container">
//             	<div className="row">
//             		<div className="col-md-6 mx-auto">
// 						<h1 className="text-center">To Do List App</h1>
// 						<List />
//             		</div>
//             	</div>	
//             </div>
//   );
// }

export default App;