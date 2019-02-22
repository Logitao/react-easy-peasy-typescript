import React, { Fragment } from 'react'
import { State, Actions, useStore, useActions } from 'easy-peasy'
import { ApplicationStore, ItemModel } from './store'
import styled, { keyframes } from 'styled-components'

const Button = styled.button`
    user-select: none;
    cursor: pointer;
    display: inline-block;
    color: black;
    background: #fff;
    border: 1px solid black;
    padding: 10px 25px 10px 25px;
    transition: all 0.09s ease-in-out;
    width: ${(props: { block?: boolean }) => props.block && '100%'};
    &:hover {
        color: #fff;
        background: black;
    }
`
const Input = styled.input`
    display: flex;
    justify-content: center;
    background-color: #fff;
    margin-right: auto;
    margin-left: auto;
    font-family: 'Montserrat';
    font-size: 20px;
`
const SpaceAround = styled.div`
    margin-top: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const TodosItemContainer = styled.div`
    margin-top: 20px;
`
const LimitedContainer = styled.div`
    max-width: 500px;
    padding: 60px;
`
const TodoText = styled.div`
    cursor: pointer;
    box-sizing: content-box;
    width: 100%;
    padding-left: 6px;
    transition: all 0.05s linear;
    &:hover {
        border-left: 3px solid black;
    }
    font-family: 'Montserrat';
    font-size: 20px;
    text-decoration: ${(props: { done: boolean }) =>
        props.done ? 'line-through' : 'none'};
    font-style: ${(props: { done: boolean }) =>
        props.done ? 'italic' : 'none'};
    user-select: none;
`

const App = () => {
    return (
        <LimitedContainer>
            <TodoForm />
            <TodosItemContainer>
                <TodoList />
            </TodosItemContainer>
        </LimitedContainer>
    )
}

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

interface TodoItemProps {
    id: number
}
const TodoItem: React.SFC<TodoItemProps> = React.memo(({ id }) => {
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

export default App
