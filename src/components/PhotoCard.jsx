import PropTypes from 'prop-types';
import React from 'react'

function PhotoCard({ photo }) {
    return (

        <div className='max-w-sm rounded overflow-hidden shadow-lg'>
            <img
                src={photo.url}
                alt={photo.title}
                className='w-full max-h-72 object-cover'
            />

            <div className='px-6 py-4'>
                <div className='font-bold text-xl mb-2'>{photo.title}</div>
            </div>
        </div>

    )
}



PhotoCard.propTypes = {
    photo: PropTypes.shape(
        {
            albumId: PropTypes.number.isRequired,
            id: PropTypes.number.isRequired,
            title: PropTypes.string.isRequired,
            url: PropTypes.string.isRequired,
            thumbnailUrl: PropTypes.string.isRequired
        }
    ).isRequired
}




export default PhotoCard;