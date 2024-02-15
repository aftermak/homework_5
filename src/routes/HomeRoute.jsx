import React from 'react'
import Home from '../components/Home/Home'
import CountryForm from '../components/CountryForm/CountryForm'

export default function HomeRoute() {
  return (
    <div>
      <h3>Home Route</h3>
      <Home />
      <CountryForm />
    </div>
  )
}
