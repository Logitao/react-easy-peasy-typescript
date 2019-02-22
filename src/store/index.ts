import { Action, createStore, select, Select } from 'easy-peasy'

export interface ItemModel {
    id: number
    text: string
    done: boolean
}

export interface TodosModel {
    items: Array<ItemModel>
    // represents a "select"
    firstItem: Select<TodosModel, ItemModel | undefined>
    getTodoCount: Select<TodosModel, number>
    getItem: Select<TodosModel, (id: number) => ItemModel | undefined>
    // represents an "action"
    addTodo: Action<TodosModel, ItemModel>
    deleteTodo: Action<TodosModel, number>
    toggleItem: Action<TodosModel, number>
}

export interface ApplicationStore {
    todos: TodosModel
}

export const store = createStore<ApplicationStore>({
    todos: {
        items: [],

        deleteTodo: ({ items }, id) => {
            const foundItem = items.find(item => item.id === id)

            if (foundItem) {
                const indexOfItem = items.indexOf(foundItem)
                items.splice(indexOfItem, 1)
            }
        },
        addTodo: (todos, item) => {
            todos.items.push(item)
        },
        toggleItem: ({ items }, id) => {
            const foundItem = items.find(item => item.id === id)
            if (foundItem) {
                foundItem.done = !foundItem.done
            }
        },

        firstItem: select(todos => todos.items[0]),
        getTodoCount: select(todos => todos.items.length),
        getItem: select(todo => (id: number) =>
            todo.items.find(item => item.id === id)
        )
    }
})
