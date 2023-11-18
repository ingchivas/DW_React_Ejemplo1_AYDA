import PropTypes from 'prop-types'

function NavBar({ user }) {
    return (
        <nav className='bg-gray-800 text-white p-4'>
            <div className='container mx-auto flex justify-between items-center' />
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
    )
}

export default NavBar;