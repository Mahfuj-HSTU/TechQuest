const { useState, useEffect } = require( "react" )

const useRecruiter = email => {
    const [ isRecruiter, setIsRecruiter ] = useState( false )
    const [ isRecruiterLoading, setIsRecruiterLoading ] = useState( true )

    useEffect( () => {
        if ( email ) {
            fetch( `http://localhost:5000/users/recruiter/${ email }` )
                .then( res => res.json() )
                .then( data => {
                    console.log( data );
                    // console.log( data );
                    setIsRecruiter( data.isRecruiter );
                    setIsRecruiterLoading( false )
                } )
        }
    }, [ email ] )
    return [ isRecruiter, isRecruiterLoading ]

}
export default useRecruiter;
