import React,{Component} from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';

const Todo= props=>(
    <tr className={props.todo.todo_completed?'completed':''}>
        <td>{props.todo.todo_description}</td>
        <td>{props.todo.todo_responsible}</td>
        <td>{props.todo.todo_priority}</td>
        <td>
                {/* <Link to={"/edit/"+props.todo._id} style={{marginRight:20}}>Edit</Link> */}
                <button type="button" className="btn btn-primary" style={{marginRight:5}}>
                    <Link to={"/edit/"+props.todo._id} style={{color:'white'}}>Edit</Link>
                </button>
                <button type="button" className="btn btn-danger">Delete</button>
        </td>
    </tr>
)
export default class TodosList extends Component{
    constructor(props){
        super(props);
        this.state={todos:[]};
    }
    componentDidMount(){
        axios.get('http://localhost:4000/todos/')
            .then(response=>{
                this.setState({todos:response.data});
            })
            .catch(err=>{
                console.log(err);
            })

    }
    componentDidUpdate(){
        axios.get('http://localhost:4000/todos/')
            .then(response=>{
                this.setState({todos:response.data});
            })
            .catch(err=>{
                console.log(err);
            })

    }
    todosList(){
        return this.state.todos.map((currentTodo,i)=>{
            return <Todo todo={currentTodo} key={i}/>
        })        
    }

    render(){
        return(
            <div>
                <h3 style={{marginTop:20}}>Todos List</h3>
                <table className="table table-stribed" style={{marginTop:20}}>
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Responsible</th>
                            <th>Priority</th>
                            <th style={{paddingLeft:30}}>Actions</th>

                        </tr>
                    </thead>
                    <tbody>
                        {this.todosList()}
                    </tbody>
                </table>



            </div>
        )                   
   }  
}