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

  addTask = (title, description)=> { //addtask se crea para que todo lo que se haga en el Taskfrom se almacene en App,js
    const newTask = { //esta es la parte que permite la creacion de una nueva tarea
      title: title,
      description: description,
      id: 45
    }
    this.setState({ //estamos modificando el estado de task con setState para poder crear una  nueva tarea
      tasks:[...this.state.tasks, newTask] //estoy diciendo, voy a tomar todo lo que ya teniamos en el estado de las tareas y le voy a agregar algo nuevo, estoy agregando una nueva tarea al arreglo que ya teniamos
    })
  }

  render(){
    //las {} permiten interpretar codigo de javascript
    //le estoy pasando todas las tareas a este complemento
    return <div>
      <TaskForm addTask={this.addTask}/> {/*se pone addtask para que enlace con taskform */}
      <Tasks tasks={this.state.tasks}/> 
    </div>
  }
}


export default App;
