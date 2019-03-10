import React, { Fragment } from 'react'
import { State, useStore } from 'easy-peasy'
import { ApplicationStore } from '../../../store'
import { TodoItem } from './TodoItemProps'
const TodoList = () => {
    const todos = useStore(
        (state: State<ApplicationStore>) => state.todos.items
    )
    return (
        <Fragment>
            {todos.map(todo => (
                <TodoItem key={todo.id} id={todo.id} />
            ))}
        </Fragment>
    )
}
export default TodoList
