import { Action, createStore, select, Select } from 'easy-peasy'

export interface TodosModel {
    //items: Array<ItemModel>
    //// represents a "select"
    //firstItem: Select<TodosModel, ItemModel | void>
    //getTodoCount: Select<TodosModel, number>
    //getItem: Select<TodosModel, (id: number) => ItemModel>
    //// represents an "action"
    //addTodo: Action<TodosModel, ItemModel>
    //deleteTodo: Action<TodosModel, number>
    //toggleItem: Action<TodosModel, number>
}
export interface ApplictionStore {
    todos: TodosModel
}

export const store = createStore<ApplictionStore>({
    todos: {}
})
