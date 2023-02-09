import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";
import useToken from "../../../Hooks/jwt/useToken";
import { useForm } from "react-hook-form";

const Recruiter = () => {
  const [error, setError] = useState("");
  const [createdRecruiterEmail, setRecruiterEmail] = useState("");
  const { createUser, updateUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [token] = useToken(createdRecruiterEmail);
  const { register, handleSubmit, reset } = useForm();

  const from = location.state?.from?.pathname || "/";

  if (token) {
    navigate(from, { replace: true });
  }

  // handle user create

  const imgApi = process.env.REACT_APP_imgbb;

  const onSubmit = (data) => {
    const image = data.image[0];
    console.log(image);
    const formData = new FormData();
    formData.append("image", image);
    const imgUrl = `https://api.imgbb.com/1/upload?expiration=600&key=${imgApi}`;

    fetch(imgUrl, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const photoUrl = imgData.data.url;
          const name = data.name;
          const email = data.email;
          const company = data.company;
          const address = data.address;
          const password = data.password;
          const role = "recruiter";

          createUser(email, password)
            .then((result) => {
              const user = result.user;
              console.log(user);
              updateUser({ displayName: name, photoURL: photoUrl });
              saveUsers();
              reset();
              setError("");
            })
            .catch((error) => {
              console.error(error);
              setError(error.message);
            });

          // save users
          const saveUsers = () => {
            const user = { name, email, company, address, photoUrl, role };
            fetch("http://localhost:5000/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(user),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.acknowledged) {
                  console.log(data);
                  toast.success("Registration successful.");
                  setRecruiterEmail(user?.email);
                  console.log(user);
                }
              });
          };
        }
      });
  };

  //   const handleRegister = (event) => {
  //     event.preventDefault();
  //     const form = event.target;

  //     const image = form.photoUrl.value;
  //     const formData = new FormData();
  //     formData.append("image", image);
  //     const imgUrl = `https://api.imgbb.com/1/upload?expiration=600&key=${imgApi}`;

  //     fetch(imgUrl, {
  //       method: "POST",
  //       body: formData,
  //     })
  //       .then((res) => res.json())
  //       .then((imgData) => {
  //         console.log(imgData);
  //         if (imgData.success) {
  //           const photo = imgData.data.url;
  //           console.log(photo);
  //           const name = form.name.value;
  //           const email = form.email.value;

  //           const company = form.company.value;
  //           const address = form.address.value;

  //           const password = form.password.value;
  //           const role = "recruiter";
  //         }
  //       });

  //     const name = form.name.value;
  //     const email = form.email.value;
  //     const photo = form.photoUrl.value;
  //     const company = form.company.value;
  //     const address = form.address.value;
  //     const photoUrl = form.photoUrl.value;
  //     const password = form.password.value;
  //     const role = "recruiter";

  //     // registered user create
  //     createUser(email, password)
  //       .then((result) => {
  //         const user = result.user;
  //         console.log(user);
  //         updateUser({ displayName: name, photoURL: photo });
  //         saveUsers();
  //         form.reset();

  //         setError("");
  //       })
  //       .catch((error) => {
  //         console.error(error);
  //         setError(error.message);
  //       });

  //     // save users
  //     const saveUsers = () => {
  //       const user = { name, email, company, address, photoUrl, role };
  //       fetch("http://localhost:5000/users", {
  //         method: "POST",
  //         headers: {
  //           "content-type": "application/json",
  //         },
  //         body: JSON.stringify(user),
  //       })
  //         .then((res) => res.json())
  //         .then((data) => {
  //           if (data.acknowledged) {
  //             console.log(data);
  //             toast.success("Registration successful.");
  //             setRecruiterEmail(user?.email);
  //             console.log(user);
  //           }
  //         });
  //     };
  //   };

  return (
    <div className="hero w-full my-24">
      <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100 py-10">
        <h1 className="text-5xl text-center font-bold">Recruiter Register </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Full Name</span>
            </label>
            <input
              type="text"
              name="name"
              {...register("name", { required: true })}
              placeholder="Enter your name"
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              {...register("email", { required: true })}
              placeholder="Enter your email"
              className="input input-bordered"
              required
            />
            <p className="text-red-600 font-semibold">{error.slice(22, 45)}</p>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="file"
              name="photoUrl"
              {...register("image", { required: true })}
              placeholder="photo url"
              className="input pt-2 input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Address</span>
            </label>
            <input
              type="text"
              name="address"
              {...register("address", { required: true })}
              placeholder="your address"
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Company Name</span>
            </label>
            <input
              type="text"
              name="company"
              {...register("company", { required: true })}
              placeholder="company name"
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              {...register("password", { required: true })}
              placeholder="password"
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control mt-6">
            <input className="btn btn-primary" type="submit" value="Register" />
          </div>
        </form>
        {/* if you are old user and you have an account */}
        <p className="text-center">
          Already have an account?{" "}
          <Link className="text-orange-600 font-bold" to="/auth/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Recruiter;
