import { useState } from 'react'
import FilterTabs from './components/FilterTabs'
import SearchBar from './components/SearchBar'
import Statistics from './components/Statistics'
import StudentForm from './components/StudentForm'
import StudentRow from './components/StudentRow'
import Header from './components/Header'
import StudentTable from './components/StudentTable'
import './styles/App.css'
import './styles/bootstrap-5.0.2-dist/css/bootstrap.min.css'


function App() {
  return (
    <>
      <Header />
      <div className="container my-4">
        <Statistics />
        <div className="row g-4">
          <div className="col-lg-8">
            <FilterTabs />
            <StudentTable />
          </div>
          <StudentForm />
        </div>
      </div>
    </>
  )
}

export default App
