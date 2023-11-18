import { useState } from 'react'
import NavBar from './components/NavBar'


function App() {

  const user = {
    name : "Jose Kuri",
    email: "jk@gmail.com",
    photo: "https://media.discordapp.net/attachments/750831694839545886/1172622670433624186/image.png"
  }

  return (
    <>
      {/* <h1 className='text-3xl font-bold text-red-600'>Hola esto es una prueba de react/vite</h1>
      <p className='font-bold text-lg text-green-800'> La cuenta es: {cuenta} </p>
      <button onClick={() => setCuenta(cuenta+1)} className='bg-blue-500 hover:bg-blue-700 text-white
      font-semibold py-2 px-4 rounded-xl'>
        Sumar 1 a la cuenta
      </button> */}
      <NavBar user={user}/>
      <NavBar user={{name: "Emilio Otero", email:"eo@up.mx", photo:"https://media.discordapp.net/attachments/750831694839545886/1172622670433624186/image.png"}}/>
  </>
  )
}

export default App
