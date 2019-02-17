import { Action, createStore, select, Select } from 'easy-peasy'
import { ItemModel } from './index'

export interface ItemModel {
    text: string
    done: boolean
    id: number
}
export interface TodosModel {
    items: Array<ItemModel>
    // represents a "select"
    firstItem: Select<TodosModel, ItemModel | void>
    getTodoCount: Select<TodosModel, number>
    getItem: Select<TodosModel, (id: number) => ItemModel>

    // represents an "action"
    addTodo: Action<TodosModel, ItemModel>
    deleteTodo: Action<TodosModel, number>
    toggleItem: Action<TodosModel, number>
}
export interface ApplictionStore {
    todos: TodosModel
}

export const store = createStore<ApplictionStore>({
    todos: {
        items: [],
        getItem: select(state => (id: number) => {
            return state.items.find(item => item.id === id) as ItemModel
        }),
        firstItem: select(state => state.items[0]),
        getTodoCount: select(state => state.items.length),
        addTodo: (state, payload) => {
            state.items.push(payload)
        },
        deleteTodo: ({ items }, payload) => {
            items.splice(
                items.indexOf(items.find(
                    item => item.id === payload
                ) as ItemModel) as number,
                1
            )
        },
        toggleItem: ({ items }, payload) => {
            const index = items.indexOf(items.find(
                item => item.id === payload
            ) as ItemModel) as number
            if (typeof items[index] !== 'undefined')
                items[index].done = !items[index].done
        }
    }
})
