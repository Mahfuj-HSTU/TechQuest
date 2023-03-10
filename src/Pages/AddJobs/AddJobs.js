import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../context/AuthProvider/AuthProvider";
import { ServerLink } from "../../Hooks/useServerLink";

const AddJobs = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { user } = useContext(AuthContext);

  const handleAddJObs = (data) => {
    const jobDetails = {
      recruiterEmail: user?.email,
      recruiterName: user?.displayName,
      recruiterImage: user?.photoURL,
      jobTitle: data.jobTitle,
      jobDescription: data.jobDescription,
      jobRequirements: data.jobRequirements,
      jobResponsibilities: data.jobResponsibilities,
      jobStatus: data.jobStatus,
      jobType: data.jobType,
      location: data.location,
      salary: data.salary,
      salaryCurrency: data.currency,
      experience: data.experience,
      language: data.language,
      mustSkills: data.mustSkills,
      optionalSkills: data.optionalSkills,
      openings: data.openings,
      allow: true,
    };

    // console.log(jobDetails);

    fetch(`${ServerLink}/all-jobs`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(jobDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("successfully created a job post");
          reset();
        }
      });
  };

  return (
    <div className="my-20 py-9 px-6 lg:w-11/12 md:w-full mx-auto bg-base-100 shadow-2xl rounded-3xl">
      <h5 className="text-2xl font-semibold mb-10">
        You Need Employee? Add A Job Post Here.
      </h5>
      <form onSubmit={handleSubmit(handleAddJObs)} action="">
        <div data-aos="fade-up" className="form-control mb-4 w-full ">
          <label className="label font-semibold">
            <span className="label-text">Job Title</span>
          </label>
          <input
            type="text"
            {...register("jobTitle", { required: true })}
            placeholder="Type here"
            className="input input-bordered w-full "
          />
          {errors.openings && (
            <span className="text-red-500 font-semibold">
              This field is required
            </span>
          )}
        </div>
        <div className="form-control mb-4 w-full ">
          <label className="label font-semibold">
            <span className="label-text">Job Description</span>
          </label>
          <textarea
            className="textarea textarea-bordered"
            {...register("jobDescription", { required: true })}
            placeholder="Job description"
          ></textarea>
          {errors.openings && (
            <span className="text-red-500 font-semibold">
              This field is required
            </span>
          )}
        </div>
        <div className="form-control mb-4 w-full ">
          <label className="label font-semibold">
            <span className="label-text">Job Requirements</span>
          </label>
          <textarea
            className="textarea textarea-bordered"
            {...register("jobRequirements")}
            placeholder="Job Requirements"
          ></textarea>
        </div>
        <div data-aos="fade-up" className="form-control mb-4 w-full ">
          <label className="label font-semibold">
            <span className="label-text">Job Responsibilities </span>
          </label>
          <textarea
            className="textarea textarea-bordered"
            {...register("jobResponsibilities")}
            placeholder="Job Responsibilities"
          ></textarea>
        </div>
        <div className="md:flex gap-5">
          <div data-aos="fade-up" className="form-control mb-4 w-full ">
            <label className="label font-semibold">
              <span className="label-text">Job status</span>
            </label>
            <select
              {...register("jobStatus", { required: true })}
              className="select select-bordered w-full "
            >
              <option disabled>Select job status</option>
              <option>On Site</option>
              <option>Remote</option>
              <option>Hybrid</option>
            </select>
            {errors.openings && (
              <span className="text-red-500 font-semibold">
                This field is required
              </span>
            )}
          </div>
          <div data-aos="fade-up" className="form-control mb-4 w-full ">
            <label className="label font-semibold">
              <span className="label-text">Job type</span>
            </label>
            <select
              {...register("jobType", { required: true })}
              className="select select-bordered w-full "
            >
              <option disabled>Select job type</option>
              <option>Internship</option>
              <option>Full time</option>
              <option> Part time</option>
            </select>
            {errors.openings && (
              <span className="text-red-500 font-semibold">
                This field is required
              </span>
            )}
          </div>
        </div>
        <div data-aos="fade-up" className="form-control w-full ">
          <label className="label font-semibold">
            <span className="label-text">Location</span>
          </label>
          <input
            type="text"
            {...register("location")}
            placeholder="Type here"
            className="input input-bordered w-full "
          />
        </div>
        <div data-aos="fade-up" className="form-control my-4 w-full ">
          <label className="label">
            <span className="label-text font-semibold">Salary</span>
          </label>
          <div className="flex gap-4">
            <input
              type="text"
              {...register("salary", { required: true })}
              placeholder="How is the salary for this job?"
              className="input input-bordered w-full "
            />
            {errors.openings && (
              <span className="text-red-500 font-semibold">
                This field is required
              </span>
            )}
            <select
              {...register("currency")}
              className="select select-bordered md:w-full max-w-xs"
            >
              <option>USD</option>
              <option>BDT</option>
              <option>EUR</option>
              <option>INR</option>
            </select>
          </div>
        </div>

        <div data-aos="fade-up" className="form-control mb-4 w-full ">
          <label className="label">
            <span className="label-text font-semibold">Experience</span>
          </label>
          <input
            type="text"
            {...register("experience")}
            placeholder="Type here"
            className="input input-bordered w-full "
          />
        </div>
        <div data-aos="fade-up" className="form-control mb-4 w-full ">
          <label className="label">
            <span className="label-text font-semibold">Languages</span>
          </label>
          <input
            type="text"
            {...register("language", { required: true })}
            placeholder="Type here"
            className="input input-bordered w-full "
          />
          {errors.openings && (
            <span className="text-red-500 font-semibold">
              This field is required
            </span>
          )}
        </div>
        <div data-aos="fade-up" className="form-control mb-4 w-full ">
          <label className="label">
            <span className="label-text font-semibold">Must-have skills</span>
          </label>
          <input
            type="text"
            {...register("mustSkills", { required: true })}
            placeholder="Type here"
            className="input input-bordered w-full "
          />
          {errors.openings && (
            <span className="text-red-500 font-semibold">
              This field is required
            </span>
          )}
        </div>
        <div data-aos="fade-up" className="form-control mb-4 w-full ">
          <label className="label">
            <span className="label-text font-semibold">
              Nice-to-have skills
            </span>
          </label>
          <input
            type="text"
            {...register("optionalSkills")}
            placeholder="Type here"
            className="input input-bordered w-full "
          />
        </div>
        <div data-aos="fade-up" className="form-control mb-4 w-full ">
          <label className="label">
            <span className="label-text font-semibold">Number of openings</span>
          </label>
          <input
            type="number"
            {...register("openings", { required: true })}
            placeholder="Type here"
            className="input input-bordered w-full "
          />
          {errors.openings && (
            <span className="text-red-500 font-semibold">
              This field is required
            </span>
          )}
        </div>

        <input
          data-aos="fade-up"
          className="btn bg-[#0675CE] hover:bg-blue-500 w-1/5 border-0 text-white mt-4"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
};

export default AddJobs;
