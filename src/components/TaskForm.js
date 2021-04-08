import React, { Component } from 'react';

export default class TaskForm extends Component {
    state = {
        title: '',
        description: ''
    }

    //esto es para evitar que se refresque la pagina
    onSubmit = e => { //e es un parametro,que en este caso significa evento puede ser cualquier nombre o letra, como el parametro solo tiene un valor, no es necesario poner los parentecis
    //    console.log (this.state) //esto es para mirar el estado de de la taera que se esta describiendo en titulo y description
       this.props.addTask(this.state.title, this.state.description) //aqui le estoy pasando los satos ques e agreguen a los campos de titulo y description a addTask que esta en app.js
        e.preventDefault();
    }

    onChange = e => { //se crea la funcion para poder reutilizarla en varias partes en este caso en onchange y onchace en este caso es un evento
        // console.log (e.target.value)//e.target.value se usa para que onchance escuche lo que se esta escribiendo en el input
        // console.log (e.target.name, e.target.value) //este es para mostra lo que se escribe en consola
        this.setState ({
            [e.target.name]: e.target.value //esta parte se hace para que lo que se escriba en los recuadros, se divida depende de si es titulo o description
        })
    }

    render () {
        
        return (  //todo este componente que encierra el return no guarda datos, solo los procesa, los recibe
            <form onSubmit={this.onSubmit}> {/*onsubmit es para que no se refresque la pagina cada que le damos enviar */}
                <input 
                    type="text" 
                    name="title"
                    placeholder="Write a Task"
                    onChange={this.onChange} 
                    value={this.state.title}/> {/*placeholder sirve para agregar un campo en el cual se puede escribir */} 
                <br/>
                <br/>
                <textarea 
                    name="description"
                    placeholder="Write a Description" 
                    onChange={this.onChange} 
                    value={this.state.description}>{/*onchance  es para que se escuche lo que se escriba en los dos input, y se escucha por medio de e.target.value*/}
                </textarea> 
                <input type="submit"/>
            </form>
        )
    }
}