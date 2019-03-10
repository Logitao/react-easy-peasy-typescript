import React, { Suspense } from 'react'
import Loading from '../../components/Loading'

const TodosItemContainer = React.lazy(() =>
    import('../../components/TodosItemContainer')
)
const LimitedContainer = React.lazy(() =>
    import('../../components/LimitedContainer')
)
const TodoForm = React.lazy(() => import('./components/TodoForm'))
const TodoList = React.lazy(() => import('./components/TodoList'))

const App = () => {
    return (
        <Suspense fallback={<Loading />}>
            <LimitedContainer>
                <TodoForm />
                <TodosItemContainer>
                    <TodoList />
                </TodosItemContainer>
            </LimitedContainer>
        </Suspense>
    )
}

export default App
