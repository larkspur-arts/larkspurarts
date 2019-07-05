import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './style.css';

//Import Pages
import HomePage from './Pages/HomePage';
import MainStoryPage from './Pages/MainStoryPage';
//Short Stories Landing
//Spinoff Stories Landing
//Art page Landing
//Art Table Page

export default class PageContainer extends Component {
    render() {
        return (
        <div id="page-container">
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route exact path='/mainstory' component={MainStoryPage}/>
                <Route component={HomePage} />
            </Switch>
        </div>
        )
    }
}
  