import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useRecruiter from '../../Hooks/useRecruiter';
import Loading from '../../pages/Shared/Loading/Loading';

const RecruiterRoute = ( { children } ) => {
    const { user, loading, logOut } = useContext( AuthContext )
    const [ isJobSeeker, isJobSeekerLoading ] = useRecruiter( user?.email )
    const location = useLocation();

    if ( loading || isJobSeekerLoading ) {
        return <Loading></Loading>
    }

    if ( user && isJobSeeker ) {
        return children;
    }
    logOut()
        .then()
        .catch()

    return <Navigate to='/login' state={ { from: location } } replace></Navigate>
};

export default RecruiterRoute;
