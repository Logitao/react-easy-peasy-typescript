import React, { Fragment } from 'react'
import { State, useStore, Actions, useActions } from 'easy-peasy'
import { ApplictionStore } from './store'
import { useCounter } from 'react-use'

export const Test = () => {
    const [value, setValue] = React.useState(0)

    return (
        <Fragment>
            <h1>{value}</h1>
            <button onClick={e => setValue(value + 1)}>Aumentar</button>
            <button onClick={e => setValue(value - 1)}>Diminuir</button>
        </Fragment>
    )
}

const Button = ({
    children,
    ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
        <button className="button" {...props}>
            {children}
        </button>
    )
}

const App = () => {
    const { addTodo } = useActions((actions: Actions<ApplictionStore>) => ({
        addTodo: actions.todos.addTodo
    }))

    const [count, { inc }] = useCounter(0)
    const [value, setValue] = React.useState<string>('')
    const onChange = (e: React.SyntheticEvent<HTMLInputElement>) =>
        setValue(e.currentTarget.value)

    return (
        <div className="App">
            <TodoList />
            <input type="text" value={value} onChange={onChange} />
            <Button
                onClick={e => {
                    addTodo({ text: value, done: false, id: count })
                    inc()
                    setValue('')
                }}
            >
                Add
            </Button>
        </div>
    )
}

const TodoList = () => {
    const { items, todoCount } = useStore((state: State<ApplictionStore>) => ({
        items: state.todos.items,
        todoCount: state.todos.getTodoCount
    }))
    const memoChild = React.useMemo(
        () => (
            <Fragment>
                {items.map((item, index) => (
                    <TodoItem key={index} id={item.id} />
                ))}
            </Fragment>
        ),
        [todoCount]
    )
    return <div className="container">{memoChild}</div>
}

interface TodoItemProps {
    id: number
}

const TodoItem = React.memo(({ id }: TodoItemProps) => {
    const { deleteTodo, toggleTodo } = useActions(
        (actions: Actions<ApplictionStore>) => ({
            deleteTodo: actions.todos.deleteTodo,
            toggleTodo: actions.todos.toggleItem
        })
    )
    const { item } = useStore(
        (state: State<ApplictionStore>) => ({
            item: state.todos.getItem(id)
        }),
        [id]
    )
    return (
        <div className="item" onClick={e => toggleTodo(id)}>
            <span
                style={{
                    cursor: 'pointer',
                    textDecoration: item.done ? 'line-through' : 'none',
                    userSelect: 'none'
                }}
            >
                {' '}
                {item.text}
            </span>
            <Button onClick={e => deleteTodo(item.id)}>Delete</Button>
        </div>
    )
})

export default App
