import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useRecruiter from '../../Hooks/useRecruiter';
import Loading from '../../pages/Shared/Loading/Loading';

const RecruiterRoute = ( { children } ) => {
    const { user, loading, logOut } = useContext( AuthContext )
    const [ isRecruiter, isRecruiterLoading ] = useRecruiter( user?.email )
    const location = useLocation();

    if ( loading || isRecruiterLoading ) {
        return <Loading></Loading>
    }

    if ( user && isRecruiter ) {
        return children;
    }
    logOut()
        .then()
        .catch()

    return <Navigate to='/login' state={ { from: location } } replace></Navigate>
};

export default RecruiterRoute;
