import React, { Component } from 'react';
import './App.css';
import tasks from "./sample/task.json";

//components
import Tasks from "./components/Tasks";
import TaskForm from './components/TaskForm';

class App extends Component {

  state = {
    tasks: tasks
  }

  render(){
    //las {} permiten interpretar codigo de javascript
    //le estoy pasando todas las tareas a este complemento
    return <div>
      <TaskForm/>
      <Tasks tasks={this.state.tasks}/> 
    </div>
  }
}


export default App;
