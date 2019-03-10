import React, { Fragment, Suspense } from 'react'
import { State, Actions, useStore, useActions } from 'easy-peasy'
import { ApplicationStore } from '../../../store'
import Button from '../../../components/Button'
import SpaceAround from '../../../components/SpaceAround'
import TodoText from '../../../components/TodoText'

interface TodoItemProps {
    id: number
}
export const TodoItem: React.SFC<TodoItemProps> = React.memo(({ id }) => {
    const { deleteTodo, toggleItem } = useActions(
        (actions: Actions<ApplicationStore>) => ({
            deleteTodo: actions.todos.deleteTodo,
            toggleItem: actions.todos.toggleItem
        })
    )
    const { todo } = useStore((state: State<ApplicationStore>) => ({
        todo: state.todos.getItem(id)
    }))
    return (
        <Fragment>
            {todo && (
                <SpaceAround>
                    <TodoText done={todo.done} onClick={e => toggleItem(id)}>
                        {todo.text}
                    </TodoText>
                    <Button onClick={e => deleteTodo(id)}>Remover</Button>
                </SpaceAround>
            )}
        </Fragment>
    )
})
