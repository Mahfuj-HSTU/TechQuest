import React from "react";
import { toast } from "react-hot-toast";
import { ServerLink } from "../../../Hooks/useServerLink";

const EditProfileModal = ({ details }) => {
  // console.log( details );
  const { _id, name, email, institute, address } = details;

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const institute = form.institute.value;
    const address = form.address.value;
    const user = { name, email, institute, address };
    fetch(`${ServerLink}/users/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((event) => {
        toast.success("updated successfully");
      });
    console.log(user);
  };

  return (
    <div>
      <input type="checkbox" id="details-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box bg-secondary relative">
          <label
            htmlFor="details-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="hero w-full mt-5">
            <div className="card flex-shrink-0 w-full max-w-xl shadow-2xl bg-base-100 py-10">
              <h1 className="text-4xl text-info text-center font-bold">
                Update Profile
              </h1>
              <form onSubmit={handleUpdate} className="card-body">
                <div className="form-control">
                  <input
                    type="text"
                    defaultValue={name}
                    name="name"
                    placeholder="Enter your name"
                    className="input input-bordered rounded-lg"
                  />
                </div>

                <div className="form-control">
                  <input
                    type="email"
                    defaultValue={email}
                    name="email"
                    placeholder="Enter your email"
                    className="input input-bordered rounded-lg"
                  />
                </div>

                <div className="form-control">
                  <input
                    type="text"
                    defaultValue={institute}
                    name="institute"
                    placeholder="your institute"
                    className="input input-bordered rounded-lg"
                  />
                </div>

                <div className="form-control">
                  <input
                    type="text"
                    defaultValue={address}
                    name="address"
                    placeholder="your address"
                    className="input input-bordered rounded-lg"
                  />
                </div>

                <div className="form-control mt-6">
                  <input
                    className="btn btn-primary text-lg text-white"
                    type="submit"
                    value="Save"
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditProfileModal;
