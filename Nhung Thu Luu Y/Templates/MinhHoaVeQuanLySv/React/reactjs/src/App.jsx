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
        <div class="row g-3 mb-4">
          <Statistics />
        </div>

        <div className="row g-4">
          <div className="col-lg-8">
            <FilterTabs />
            <StudentTable />
          </div>
          <div class="col-lg-4">
            <StudentForm />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
