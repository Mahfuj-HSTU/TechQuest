const { useState, useEffect } = require( "react" )

const useJobSeeker = email => {
    const [ isJobSeeker, setIsJobSeeker ] = useState( false )
    const [ isJobSeekerLoading, setIsJobSeekerLoading ] = useState( true )

    useEffect( () => {
        if ( email ) {
            fetch( `http://localhost:5000/users/jobSeeker/${ email }` )
                .then( res => res.json() )
                .then( data => {
                    // console.log( data );
                    setIsJobSeeker( data.isJobSeeker );
                    setIsJobSeekerLoading( false )
                } )
        }
    }, [ email ] )
    return [ isJobSeeker, isJobSeekerLoading ]

}
export default useJobSeeker;
