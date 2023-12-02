import PropTypes from 'prop-types'
import { useState } from 'react'
import CreatePostModal from './CreatePostModal';

function NavBar({ user, onReload }) {

    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleSubmit = async (postData) => {
        try {
            const response = await fetch('https://img.api.mbgrp.com.mx/api/v1/images',{
                method : 'POST',
                headers:{
                    'Content-Type' : 'application/json'
                },
                body:JSON.stringify(postData)
            });
            if (!response.ok) {
                throw new Error("Error de Red")
            }
            setIsModalOpen(false)
            onReload()

        } catch (error) {
            console.error('No pude mandar el post ', error)
        }

    }


    return (
        <nav className='bg-gray-800 text-white p-4'>
            <div className='container mx-auto flex justify-between items-center'>
                <div className='text-lg font-semibold'>
                    <img src='https://play-lh.googleusercontent.com/ZyWNGIfzUyoajtFcD7NhMksHEZh37f-MkHVGr5Yfefa-IX7yj9SMfI82Z7a2wpdKCA=w240-h480-rw'
                        alt='logo'
                        className='h-10 w-10 inline-block mr-2 rounded-lg'
                    />
                    <a
                        href='/'
                        className='hover:text-gray-500'
                    >
                        Photos App
                    </a>
                </div>

                <div className='flex items-center space-x-4'>
                    <a href='/' className='hover:text-gray-300'>Home</a>
                    <a href='/' className='hover:text-gray-300'>Mi perfil</a>
                    <button className='hover:text-gray-300 text-white bg-blue-500 hover:bg-blue-700 px-4 py-2 rounded'
                    onClick={()=> setIsModalOpen(true)}
                    >
                        Crear Post
                    </button>

                    {user && (
                        <div className='flex items-center space-x-2'>
                            <img src={user.photo} alt={user.name} className='h-8 w-8 rounded-full' />
                            <span>{user.name} ({user.email})</span>
                        </div>
                    )
                    }

                    {
                        // Si no tenemos un usuario, veremos un botón de iniciar sesión
                        // el ! denota la negación
                        !user && (
                            <button className='hover:text-gray-300 text-white outline px-4 py-2 rounded'>
                                Iniciar Sesión
                            </button>
                        )
                    }


                </div>

            </div>
                
                {isModalOpen &&
                <CreatePostModal onClose={() => setIsModalOpen(false)}
                onSubmit={handleSubmit}/>
                }

        </nav>
    )

}

NavBar.propTypes = {
    user: PropTypes.shape(
        {
            name: PropTypes.string,
            email: PropTypes.string,
            photo: PropTypes.string
        }
    ),
    onReload: PropTypes.func.isRequired
}

export default NavBar;