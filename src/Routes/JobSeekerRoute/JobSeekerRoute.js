import React, { useContext, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { fetchRole } from '../../Hooks/Role/useRoleSlice';
// import useJobSeeker from '../Hooks/useJobSeeker';
import Loading from '../../Pages/Shared/Loading/Loading';

const JobSeekerRoute = ( { children } ) => {
    const { user, loading, logOut } = useContext( AuthContext )
    // const [ isJobSeeker, isJobSeekerLoading ] = useJobSeeker( user?.email )
    const role = useSelector( ( state ) => state.roleReducer.role.role );
    const jobSeeker = "jobSeeker";
    const dispatch = useDispatch();

    const location = useLocation();

    useEffect( () => {
        dispatch( fetchRole( user?.email ) );
    }, [ dispatch, user?.email ] );


    if ( loading ) {
        return <Loading></Loading>
    }

    if ( user && role === jobSeeker ) {
        return children;
    }
    logOut()
        .then( toast.error( 'Please login as a Recruiter' ) )
        .catch()

    return <Navigate to='/auth/login' state={ { from: location } } replace></Navigate>
};

export default JobSeekerRoute;
