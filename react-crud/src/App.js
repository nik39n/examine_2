import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, Switch, Route } from "react-router-dom";
// import TutorialsList from "./components/tutorial-list.components";
import AddTutorial from "./components/add-tutorial.component";
import TutorialsList from "./components/tutorials-list.component";
import Tutorial from "./components/tutorial.component";
import Main from "./components/main";
import Student from "./components/student";


class App extends Component {
  render() {
    return(
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to="/" className="navbar-brand">
           Главная
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">              
              <Link to={"/about"} className="nav-link">
                О студент
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/tutorials"} className="nav-link">
                Список машин
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Добавить машину
              </Link>
            </li>
          </div>
        </nav>
        <div className="container mt-3">
          <Switch>
            <Route exact path={'/'} component = {Main}/>
            <Route exact path="/add" component={AddTutorial}/>
            <Route exact path="/about" component={Student}/>
            <Route exact path="/tutorials/:id" component={Tutorial}/>
            <Route exact path='/tutorials' component={TutorialsList}/>


          </Switch>
        </div>
      </div>
    )
  }
}

export default App;
