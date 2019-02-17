import React, { Fragment } from 'react'
import { State, useStore, Actions, useActions } from 'easy-peasy'
import { ApplictionStore } from './store'
import styled from 'styled-components'

const Button = styled.a``

const App = () => {
    return (
        <Fragment>
            <Button>Hello</Button>
        </Fragment>
    )
}

export default App
