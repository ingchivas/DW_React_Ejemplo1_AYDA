import { useEffect, useState } from 'react';
import PropTypes from 'prop-types'

function CreatePostModal({ onClose, onSubmit }) {

    const [postData, setPostData] = useState(
        {
            albumId: 1,
            title: "",
            url: "",
            thumbnailUrl: ""
        }
    )

    const [previewUrl, setPreviewUrl] = useState('')

    useEffect(() => {

        if (postData.url) {
            setPreviewUrl(postData.url)
        } else if (postData.thumbnailUrl) {
            setPreviewUrl(postData.thumbnailUrl)
        } else {
            setPreviewUrl("")
        }

    }, [postData.url, postData.thumbnailUrl])

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'url') {
            setPostData({ ...postData, url: value, thumbnailUrl: value })
        } else {
            setPostData({ ...postData, [name]: value })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(postData)
    }

    return (
        <div className='fixed top-0 right-0 bottom-0 left-0 bg-black bg-opacity-50 flex justify-center items-center'>
            <div className='bg-white rounded-lg shadow-xl p-6 w-full max-w-md'>
                <form onSubmit={handleSubmit} className='space-y-4'>
                    <div>
                        <label className='block text-gray-700 text-sm font-bold mb-2'>Titulo:</label>
                        <input type='text' name='title' value={postData.title} onChange={handleChange} required
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
                    </div>
                    <div>
                        <label className='block text-gray-700 text-sm font-bold mb-2'>URL:</label>
                        <input type='text' name='url' value={postData.url} onChange={handleChange} required
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
                    </div>
                    <div>
                        <label className='block text-gray-700 text-sm font-bold mb-2'>Thumbnail URL:</label>
                        <input type='text' name='thumbnailURL' value={postData.thumbnailUrl} onChange={handleChange} required disabled
                            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' />
                    </div>
                    {previewUrl && (
                        <div className='my-4'>
                            <p className='text-gray-700 text-sm font-bold mb-2'>Preview:</p>
                            <img src={previewUrl} alt='Preview' className='w-full h-48 object-cover rounded-lg' />
                        </div>
                    )}

                    <div className='flex items-center justify-between'>
                        <button type='submit' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4
                        rounded focus:outline-none focus:shadow-outline'>Publicar</button>
                        <button onClick={onClose} className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4
                        rounded focus:outline-none focus:shadow-outline'>Cerrar</button>
                    </div>
                </form>
            </div>
        </div>
    )

}

CreatePostModal.propTypes = {
    onClose : PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
}

export default CreatePostModal;