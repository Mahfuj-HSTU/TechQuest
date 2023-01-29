import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const Recruiter = () => {
    const [ error, setError ] = useState( "" );
    const { createUser, updateUser } = useContext( AuthContext );
    const navigate = useNavigate();

    // handle user create
    const handleRegister = ( event ) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photoUrl.value;
        const company = form.company.value;
        const address = form.address.value;
        const photoUrl = form.photoUrl.value;
        const password = form.password.value;
        const role = "recruiter";

        // registered user create
        createUser( email, password )
            .then( ( result ) => {
                const user = result.user;
                console.log( user );
                updateUser( { displayName: name, photoURL: photo } );
                saveUsers();
                form.reset();
                toast.success( "Registration successful." );
                navigate( "/" );
                setError( "" );
            } )
            .catch( ( error ) => {
                console.error( error );
                setError( error.message );
            } );

        // save users
        const saveUsers = () => {
            const user = { name, email, company, address, photoUrl, role };
            fetch( "http://localhost:5000/users", {
                method: "POST",
                headers: {
                    "content-type": "application/json",
                },
                body: JSON.stringify( user ),
            } )
                .then( ( res ) => res.json() )
                .then( ( data ) => {
                    console.log( data );
                } );
        };
    };

    return (
        <div className="hero w-full my-24">
            <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100 py-10">
                <h1 className="text-5xl text-center font-bold">Recruiter Register </h1>
                <form onSubmit={ handleRegister } className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Full Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Enter your name" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Enter your email" className="input input-bordered" required />
                        <p className="text-red-600 font-semibold">{ error.slice( 22, 45 ) }</p>
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" name="photoUrl" placeholder="photo url" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Address</span>
                        </label>
                        <input type="text" name="address" placeholder="your address" className="input input-bordered" />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Company Name</span>
                        </label>
                        <input type="text" name="company" placeholder="company name" className="input input-bordered" />
                    </div>



                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                    </div>

                    <div className="form-control mt-6">
                        <input className="btn btn-primary" type="submit" value="Register" />
                    </div>
                </form>
                {/* if you are old user and you have an account */ }
                <p className="text-center">
                    Already have an account?{ " " }
                    <Link className="text-orange-600 font-bold" to="/login">
                        Login
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Recruiter;
