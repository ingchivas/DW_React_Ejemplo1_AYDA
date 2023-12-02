import { useState, useEffect } from 'react'
import NavBar from './components/NavBar'
import PhotoCard from './components/PhotoCard'


function App() {

  const user = {
    name: "Jose Kuri",
    email: "jk@gmail.com",
    photo: "https://media.discordapp.net/attachments/750831694839545886/1172622670433624186/image.png"
  }

  const [photos, setPhotos] = useState([])
  const [reload, setReload] = useState(false)

  const reloadPhotos = () => {
    setReload(prev => !prev)
  };


  useEffect(() => {
    fetch('https://img.api.mbgrp.com.mx/api/v1/images')
      .then(response => response.json())
      .then(data => setPhotos(data.slice(0, 25)))
      .catch(error => console.error('Error trayendo los datos: ', error))
  }, [reload])

  console.log(photos)
  return (
    <>
      {/* <h1 className='text-3xl font-bold text-red-600'>Hola esto es una prueba de react/vite</h1>
      <p className='font-bold text-lg text-green-800'> La cuenta es: {cuenta} </p>
      <button onClick={() => setCuenta(cuenta+1)} className='bg-blue-500 hover:bg-blue-700 text-white
      font-semibold py-2 px-4 rounded-xl'>
        Sumar 1 a la cuenta
      </button> */}
      <NavBar user={user} onReload={reloadPhotos} />
      {/* <NavBar user={{name: "Emilio Otero", email:"eo@up.mx", photo:"https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"}}/>
      <NavBar/> */}

      <div className='flex justify-center'>
        <div className='grid grid-cols-3 gap-10 mt-5'>

          {/* {photos.map(photo => (
            <div key={photo.id} className='max-w-sm rounded overflow-hidden shadow-lg'>
              <img src={photo.url} alt={photo.title} className='w-full' />
              <div className='px-6 py-4'>
                <div className='font-bold text-xl mb-2'>{photo.title}</div>
              </div>
            </div>
          ))
          } */}
          {photos.map(photo => (
            <PhotoCard key={photo.id} photo={photo}/>
          ))
          
          }
        </div>
      </div>

    </>
  )
}

export default App
