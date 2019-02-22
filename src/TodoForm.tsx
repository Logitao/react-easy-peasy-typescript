import React from 'react'
import { Actions, useActions } from 'easy-peasy'
import { ApplicationStore } from './store'

import Button from './components/Button'
import Input from './components/Input'

const TodoForm = () => {
    const addTodo = useActions(
        (actions: Actions<ApplicationStore>) => actions.todos.addTodo
    )
    const [value, setValue] = React.useState('')
    const add = () =>
        addTodo({
            done: false,
            text: value,
            id: Math.floor(Math.random() * 2123446543467 + 1)
        })
    const onChange = (e: React.SyntheticEvent<HTMLInputElement>) =>
        setValue(e.currentTarget.value)
    return (
        <form
            onSubmit={e => {
                e.preventDefault()
                if (value !== '') {
                    add()
                    setValue('')
                }
            }}
        >
            <Input
                placeholder="Digite aqui..."
                type="text"
                name={name}
                onChange={onChange}
                value={value}
            />
            <Button block type="submit">
                Adicionar
            </Button>
        </form>
    )
}
export default TodoForm
