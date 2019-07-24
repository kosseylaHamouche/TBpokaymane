import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { Dashboard } from './components/Dashboard/Dashboard.js';
import { Login } from './components/Login/Login.js';
import { Signup } from './components/Signup/Signup.js';
import { PrivateRoute } from './components/PrivateRoute.js';
import  PokeDashBoard  from './components/Pokedashboard';
import './App.css';
import './index.css';

class App extends Component {
        render() {
        return (
        <div className="app">
            <div className="App-content">
                <Switch>  
                    <Route exact path="/" component={Login}/>
                    <Route exact path ="/signup" component={Signup}/>
                    <Route exact path ="/toto" component={PokeDashBoard}/>
                    <PrivateRoute path='/dashboard' component={Dashboard} />
                </Switch>
            </div>
        </div>
        );
    }
}
export default App;
