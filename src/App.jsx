import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeCard from './components/CoffeCard'
import { useState } from 'react'

function App() {

  const loadedoffees=useLoaderData()
  const [coffees, setCoffees] = useState(loadedoffees)

  return (
    <div className=' m-20'>
    
      <h1 className=' text-4xl text-purple-600 text-center my-20'>Coffee Collection : {coffees.length}</h1>
      <div className=' grid md:grid-cols-2 gap-4'>
      {
        coffees.map(coffee => <CoffeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeCard>)
      }
      </div>
    
    </div>
  )
}

export default App
