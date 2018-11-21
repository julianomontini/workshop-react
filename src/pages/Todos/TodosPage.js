import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import { loadTodos, addTodo, removeTodo } from '../../actions'

class TodosPage extends Component{

    constructor(props){
        super(props);

        this.onAdd = this.onAdd.bind(this);
        this.onRemove = this.onRemove.bind(this);
    }

    onAdd(todo){
        this.props.addTodo(todo);
    }

    onRemove(id){
        this.props.removeTodo(id);
    }

    render(){
        return(
            <div>
                <Grid container justify="center">
                    <Grid container item xs={12} justify="center">
                        <TodoForm onAdd={this.onAdd} onRemove={this.onRemove}/>
                    </Grid>
                    <Grid container item xs={12} justify="center" spacing={32}>
                        {this.props.todos.map(t => {
                            return (<Grid container item xs={12} sm={6} md={4} lg={3} justify="center" key={t.id}>
                                <Todo {...t} onRemove={() => this.onRemove(t.id)}/>
                            </Grid>)
                        })}
                    </Grid>
                </Grid>
            </div>
        )
    }
    componentWillMount(){
        this.props.loadTodos();
    }
}

const mapStateToProps = state => {
    return {
        todos: state.todos
    }
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({loadTodos, addTodo, removeTodo}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosPage);