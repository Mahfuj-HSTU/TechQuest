import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector} from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import { fetchRole } from '../../Hooks/Role/useRoleSlice';
import Loading from '../../Pages/Shared/Loading/Loading';

const RecruiterRoute = ( { children } ) => {
    const { user, loading, logOut } = useContext( AuthContext );
    const location = useLocation();
    const [ role, setRole ] = useState( localStorage.getItem( "role" ) );
    const recruiter = "recruiter";
    const dispatch = useDispatch();

    const userRole = useSelector( ( state ) => state.roleReducer.role.role );

    useEffect( () => {
        if ( user?.email ) {
            dispatch( fetchRole( user?.email ) );
        }
    }, [ dispatch, user?.email ] );

    useEffect( () => {
        if ( userRole ) {
            localStorage.setItem( "role", userRole );
            setRole( userRole );
        }
    }, [ userRole ] );

    if ( loading ) {
        return <Loading />;
    }

    console.log(role);

    if ( user && role === recruiter ) {
        return children;
    }

    logOut()
        .then( toast.error( "Please login as a Recruiter" ) )
        .catch();

    return <Navigate to="/auth/login" state={ { from: location } } replace />;
};

export default RecruiterRoute;

