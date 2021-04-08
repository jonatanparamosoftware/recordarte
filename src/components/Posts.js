import React, { Component } from 'react'

export default class Posts extends Component {

    async componentDidMount(){ //permite ejecutas alguna funcion o aplicacion antes que se cargue todo lo demas
        const res=await fetch ('https://jsonplaceholder.typicode.com/posts') //fetch permite hacer peticiones a otros servidores
        console.log(res)
    }
    render() {
        return (
            <div>
                <h1>Posts</h1>
            </div>
        )
    }
}

