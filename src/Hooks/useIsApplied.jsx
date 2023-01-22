import { useContext } from 'react';
import { AuthContext } from '../context/AuthProvider/AuthProvider';

const useIsApplied = (data) => {
    const { user } = useContext(AuthContext);
    let c = false
    data.map(check =>
        c = ((check.email === user?.email) && true
        //  console.log(check.email) 
        )
        
        
    )
    return c;

};

export default useIsApplied;