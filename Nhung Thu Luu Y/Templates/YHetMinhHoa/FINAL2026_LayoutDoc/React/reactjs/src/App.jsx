import { useState } from 'react'
import Header from './components/Header'
import Statistics from './components/Statistics'
import ActivityForm from './components/ActivityForm'
import FilterTabs from './components/FilterTabs'
import ActivityTable from './components/ActivityTable'
import './styles/App.css'
import './styles/bootstrap-5.0.2-dist/css/bootstrap.min.css'

function App() {

  return (
    <>
      <Header />
      <Statistics />
      
      <div class="container-fluid p-3">
      <ActivityForm />
      <FilterTabs />
      <ActivityTable />

      </div>
    </>
  )
}

export default App
