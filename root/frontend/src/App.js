import React,{Component} from 'react';
import {BrowserRouter as Router ,Route ,Link} from  "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import TodosList from './components/todos-list.component';
import EditTodo from './components/edit-todo.component';
import CreateTodo from './components/create-todo.component';

import logo from "./githubLogo2.svg";

class App extends Component {
  render(){
    return (
      <Router> 
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="https://github.com/AhmedSoror/ToDoList" target="_blank">
            <img src={logo} width="35" height="35" alt="Github source code" />
          </a>
          <Link to="/" className="navbar-brand">MERN-Stack Todo App</Link>
          <div className="collpase nav-collapse">
            <ul className="navbar-nav mr-auto">
              <li className="navbar-item">
                <Link to="/" className="nav-link">Todos</Link>
              </li>
              <li className="navbar-item">
                <Link to="/create" className="nav-link">Create Todo</Link>
              </li>            
            </ul>
          </div>
        </nav>
        <div className="container">
          <Route path="/" exact component={TodosList} />
          <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} />
        </div>
    </Router>
    );
  }
}

export default App;
