import React, { useState } from 'react';
import axios from 'axios';
import { ServerLink } from '../../../Hooks/useServerLink';
// import { toast } from 'react-hot-toast';

const VideoUpload = () => {
    const [ video, setVideo ] = useState( [] );

    const handleFileChange = ( e ) => {
        const file = e.target.files;
        setVideo( file );

        let formData = new FormData();
        for ( let key in video ) {
            formData.append( "video", video[ key ] )
        }
    };
    console.log( video );

    const handleUpload = () => {
        axios.post( `${ ServerLink }/videos`, { video } )
            .then( () => {
                console.log( 'Video uploaded successfully' );
            } )
            .catch( error => {
                console.error( error );
            } );
        // const url = ( 'http://localhost:5000/videos' )
        // fetch( url, {
        //     method: "POST",
        //     headers: {
        //         'Content-type': 'application/json'
        //     },
        //     body: JSON.stringify( video )
        // } )
        //     .then( res => res.json() )
        //     .then( data => {
        //         if ( data.acknowledged ) {
        //             toast.success( 'Video added successfully' )
        //         }
        //     } )
    };

    return (
        <div>
            <input onChange={ handleFileChange } type="file" name='video' />
            <button onClick={ handleUpload } className='btn btn-info'>Upload</button>
        </div>
    );
};

export default VideoUpload;
