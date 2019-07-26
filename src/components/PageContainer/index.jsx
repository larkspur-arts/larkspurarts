import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './style.css';

//Import Pages
import HomePage from './Pages/HomePage';
import MainStoryPage from './Pages/MainStoryPage';
import ShortStoryPage from './Pages/ShortStoryPage';
import SpinoffStoryPage from './Pages/SpinoffStoryPage';
import ArtPage from './Pages/ArtPage';

export default class PageContainer extends Component {
    render() {
        return (
        <div id="page-container" className="page-container">
            <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route exact path='/mainstory' component={MainStoryPage}/>
                <Route exact path='/shortstories' component={ShortStoryPage}/>
                <Route exact path='/spinoffstories' component={SpinoffStoryPage}/>
                <Route exact path='/art' component={ArtPage}/>
                <Route component={HomePage} />
            </Switch>
        </div>
        )
    }
}
  