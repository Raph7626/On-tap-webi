import React from 'react'
import Header from './components/Header'
import Form from './components/Form'
import List from './components/List'
import './styles/App.css'
import './styles/bootstrap-5.0.2-dist/css/bootstrap.min.css'

function App() {
  return (
    <>
      <Header />

        <div className="row">
          <Form />
          <List />
        </div>

    </>
  )
}

export default App;
