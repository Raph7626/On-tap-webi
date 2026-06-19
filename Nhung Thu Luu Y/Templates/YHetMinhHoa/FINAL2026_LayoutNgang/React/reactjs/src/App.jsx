import { useState } from 'react'
import Header from './components/Header'
import Statistics from './components/Statistics'
import FilterTabs from './components/FilterTabs'
import ShipmentTable from './components/ShipmentTable'
import ShipmentForm from './components/ShipmentForm'
import './styles/App.css'
import './styles/bootstrap-5.0.2-dist/css/bootstrap.min.css'

function App() {

  return (
    <>
      <Header />
      <Statistics />

      <div className="container-fluid p-3">
        <div className="row g-3">
          <div className="col-8">
            <FilterTabs />
            <ShipmentTable />
          </div>

          <div className="col-4">
            <ShipmentForm />
          </div>

        </div>
      </div>
    </>
  )
}

export default App
