import { useState } from 'react'
import Header from './components/Header'
import Statistics from './components/Statistics'
import './styles/App.css'
import './styles/bootstrap-5.0.2-dist/css/bootstrap.min.css'
import FilterTabs from './components/FilterTabs'
import StudentTable from './components/StudentTable'
import StudentForm from './components/StudentForm'

function App() {
  

  return (
    <>
      <Header />
      <Statistics />

       <div className="container-fluid p-3"></div>
       <FilterTabs />

            <div class="card">
            <StudentTable />
            
            </div>
      <StudentForm />
    </>
  )
}

export default App
