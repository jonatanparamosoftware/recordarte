import React, { Component } from "react";
import PropTypes from 'prop-types';


class Task extends Component {

    StyleCompleted(){
        return {
            fontSize: '20px',
            color:this.props.task.done ? 'gray' : 'black', //si thas.done es true (?) caso contrario(:) devolder color negro
            textDecoration:this.props.task.done ? 'line-through' : 'none' //line-througth es para tachar el texto
        }
    }

    render (){
        const {task} = this.props; /*estoy guardando this,props en la conatnte task para no tener que poner this.props en los elementos de abajo */
        return <p style={this.StyleCompleted ()}>
            {task.title} - 
            {task.description} - 
            {task.done} 
            {task.id}
        <input type="checkbox"/> {/* imput va a servir pra cambiar el estado de .done de tru a false */}
       <button style={btnDelete}> {/*servira para eliminar cada tarea*/}
           x
       </button>
        </p>
    }
}

Task.propTypes = {
    task: PropTypes.object.isRequired
}

//ESTILOS
const btnDelete = {
    fontSize: '18px',
    background: '#ea2027',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '50%',
    cursor: 'pointer'
}

export default Task;