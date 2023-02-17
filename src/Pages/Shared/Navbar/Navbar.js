import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import SignUpModal from "../../SignUp/SignUpModal";
import EditProfile from "./EditProfile";
import { useDispatch, useSelector } from "react-redux";
import { fetchRole } from "../../../Hooks/Role/useRoleSlice";
import { useEffect } from "react";
import Notification from "./Notification";
import './navbar.css'
import EditProfileModal from "./EditProfileModal";

const Navbar = () => {
  const { user } = useContext( AuthContext );
  const details = useSelector( ( state ) => state.roleReducer.role );
  const role = details.role
  const admin = "admin";
  const recruiter = "recruiter";
  const jobSeeker = "jobSeeker";
  const dispatch = useDispatch();
  console.log( role )

  useEffect( () => {
    user?.email && dispatch( fetchRole( user?.email ) );
  }, [ dispatch, user?.email ] );


  // const { data: details = [], refetch } = useQuery( {
  //   queryKey: [ 'details' ],
  //   queryFn: () => fetch( `${ ServerLink }/users/${ user?.email }` )
  //     .then( res => res.json() )
  // } )
  console.log( details );


  const menuItems = (
    <>
      <li className="font-semibold">
        <Link to="/">Features</Link>
        <Link to="/all-jobs">All Jobs</Link>
        <Link to="/about">About Us</Link>
      </li>
      { user?.email && (
        <>
          { role === admin && (
            <>
              <li className="font-medium">
                <Link to="admin/courses">Courses</Link>
                <Link to="admin/users">All Users</Link>
              </li>
            </>

          ) }

          { role === recruiter && (

            <>
              <li className="font-medium">
                <Link to="/recruiter/all-job-seekers">All Job Seekers</Link>
                <Link to="/recruiter/add-job">Add Job</Link>
                <Link to="/recruiter/MyJobPost">MyPost</Link>
              </li>
            </>

          ) }

          { role === jobSeeker && (

            <>
              <li className="font-semibold">
                <Link to="/job-seeker/myjobs">My Jobs</Link>
                <Link to="/job-seeker/courses">Courses</Link>
              </li>
            </>
          ) }
        </>
      )
        // : (
        //   <>
        //     <li className="font-semibold">
        //       <Link to="/auth/login">Login</Link>
        //     </li>
        //     <li className="font-semibold">
        //       <label htmlFor="sign-up-modal" className="bg-primary rounded-full px-4 text-white">Get Started</label>
        //     </li>
        //   </>
        // )
      }
    </>
  );

  window.onscroll = function () {
    if ( document.body.scrollTop > 50 || document.documentElement.scrollTop > 50 ) {
      document.querySelector( ".customNavbar" ).classList.add( "customNavbar-scrolled" );
      // console.log( 'check' );
    } else {
      document.querySelector( ".customNavbar" ).classList.remove( "customNavbar-scrolled" );
    }
  };


  return (
    <div>
      <div className="navbar justify-evenly md:justify-between lg:justify-evenly customNavbar shadow-lg fixed h-20 top-0 z-30 left-0 right-0 backdrop-blur-lg mx-auto ">
        <div className="">
          <div className="dropdown">
            <label tabIndex={ 0 } className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <u
              tabIndex={ 0 }
              className="menu menu-compact dropdown-content p-2 shadow bg-gray-200 rounded-box w-52  text-black"
            >
              { menuItems }
            </u>
          </div>
          <Link to="/" className="btn btn-ghost">
            <svg
              className="w-8 text-deep-purple-accent-400"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              stroke="currentColor"
              fill="none"
            >
              <rect x="3" y="1" width="7" height="12" />
              <rect x="3" y="17" width="7" height="6" />
              <rect x="14" y="1" width="7" height="6" />
              <rect x="14" y="11" width="7" height="12" />
            </svg>
            <span className="ml-1 text-xl font-bold tracking-wide uppercase">
              TechQuest
            </span>
          </Link>
        </div>
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal p-0 justify-end flex-nowrap">
            { menuItems }
          </ul>
        </div>
        { user?.email ? <div className="text-black">
          <div className="flex justify-center">
            <Notification></Notification>
            <EditProfile></EditProfile>
          </div>
        </div>
          :
          <div className="font-semibold flex gap-4">
            <Link to="/auth/login" className=" border-none hover:bg-gray-200 rounded-lg px-4 py-2 ">Login</Link>
            <label htmlFor="sign-up-modal" className="btn bg-primary border-none hover:bg-info rounded-lg px-4 text-white">Get Started</label>
          </div>
        }
      </div>
      <SignUpModal></SignUpModal>
      {
        user?.email && <EditProfileModal details={ details } ></EditProfileModal>
      }
    </div>
  );
};

export default Navbar;
