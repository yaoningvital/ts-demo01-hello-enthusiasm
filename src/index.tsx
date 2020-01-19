import * as React from 'react'
import * as ReactDOM from 'react-dom'
import Hello from "./containers/Hello";
import {createStore} from 'redux'
import {enthusiasm} from './reducers'
import {StoreState} from './types'
import {Provider} from 'react-redux'

const store = createStore<StoreState>(enthusiasm, {
    languageName: 'TypeScript',
    enthusiasmLevel: 1
})

ReactDOM.render(
    <Provider store={store}>
        <Hello/>
    </Provider>,
    document.getElementById('root') as HTMLElement
)