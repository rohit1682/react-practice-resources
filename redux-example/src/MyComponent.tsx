import React from 'react'
import { useAppSelector } from './redux-store/hooks/MyHook'


export default function MyComponent() {
    const count = useAppSelector(state => state.counter);

  return (
    <div>

        <h1>Count is: { count }</h1>

    </div>
  )
}