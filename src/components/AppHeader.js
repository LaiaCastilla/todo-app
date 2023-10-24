import React from 'react'
import Button from './Button'

function AppHeader() {
  return (
    <div>
        <h1>Hello from the App Header</h1>
        <Button variant="primary" text="Add Task"/>
    </div>
  )
}

export default AppHeader