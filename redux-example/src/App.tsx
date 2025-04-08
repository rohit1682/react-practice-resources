import './App.css'
import React from 'react'

import { Provider } from 'react-redux'
import {store} from '../src/redux-store/store'
import MyComponent from './MyComponent'

function App() {

  return (
    <>
      <React.StrictMode>
      
        <Provider store={ store }>
          <MyComponent />
        </Provider>
      
      </React.StrictMode>
    </>
  )
}

export default App
