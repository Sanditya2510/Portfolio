import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, useLocation } from 'react-router-dom'

import { TransitionGroup, CSSTransition } from "react-transition-group";

import Navbar from './components/navbar/navbar'
import About from './components/about/about'
import Awards from './components/awards/awards'
import Contact from './components/contact/contact'
import Education from './components/education/education'
import Hobbies from './components/hobbies/hobbies'
import Project from './components/projects/projects'
import Skills from './components/skills/skills'
import Work from './components/work/work'
import Error from './components/error'

import './animation.css'

function AnimationApp(){
  const location = useLocation()
  const routes = [
    {path: '/', component: About, exact: true},
    {path: '/awards', component: Awards, exact: false},
    {path: '/contact', component: Contact, exact: false},
    {path: '/hobbies', component: Hobbies, exact: false},
    {path: '/education', component: Education, exact: false},
    // {path: '/projects', component: Project, exact: true},
    {path: '/skills', component: Skills, exact: false},
    {path: '/work', component: Work, exact: false},
  ]

  return (
      <div>
        <TransitionGroup>
          <CSSTransition key={location.key} classNames="fade" timeout={3000}>
            <BrowserRouter>
              <Switch location={location}>
                {
                  routes.map( route => {
                    return (
                      <Route path={route.path} component={route.component} exact={route.exact} />
                    )
                  })
                }
                <Route component={Error} />
              </Switch>
            </BrowserRouter>
          </CSSTransition>
        </TransitionGroup>
      </div>
  );
}

class App extends Component{
  render(){
    return (
      <div className="App">
        <BrowserRouter>
        <Navbar /> 
          <Route path="*">
            <AnimationApp />
          </Route>
        </BrowserRouter>
      </div>
    )
  }
}

export default App