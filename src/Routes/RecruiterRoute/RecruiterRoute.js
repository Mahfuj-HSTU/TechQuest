import React, { useContext, useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { fetchRole } from '../../Hooks/Role/useRoleSlice';
import Loading from '../../Pages/Shared/Loading/Loading';

const RecruiterRoute = ( { children } ) => {
    const { user, loading, logOut } = useContext( AuthContext )
    const location = useLocation();
    // const [ isRecruiter, isRecruiterLoading ] = useRecruiter( user?.email )
    const role = useSelector( ( state ) => state.roleReducer.role.role );
    const recruiter = "recruiter";
    const dispatch = useDispatch();

    useEffect( () => {
        user?.email && dispatch( fetchRole( user?.email ) );
    }, [ dispatch, user?.email ] );


    if ( loading ) {
        return <Loading></Loading>
    }

    if ( user && role === recruiter ) {
       return children;
    }
    logOut()
        .then(
            toast.error( 'Please login as a Recruiter' )
        )
        .catch()
    return <Navigate to='/auth/login' state={ { from: location } } replace></Navigate>
};

export default RecruiterRoute;
