import React from "react";
import { Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { addApply } from "./ApplyJobSlice";
import { useNavigate } from "react-router-dom";

const ApplyForm = () => {
  const navigate = useNavigate();
  const stateData = useSelector((state) => state);
  const dispatch = useDispatch();
  const { role } = stateData.roleReducer;
  const jobDetails = stateData.jobDetailsReducer.jobDetails;
  //   console.log(stateData);

  // storing application
  const handleApply = () => {
    const applyInfo = {
      job: jobDetails,
      email: role?.email,
      name: role?.name,
      address: role?.address,
      photoUrl: role?.photoUrl,
      experience: role?.experience,
      notification: "true",
    };
    // console.log(applyInfo);
    dispatch(addApply(applyInfo));
    navigate(`/job-details/${jobDetails._id}`);
  };

  return (
    <div>
      <h1 className="text-2xl my-2 font-bold">
        Applying For: {jobDetails.jobTitle}{" "}
      </h1>
      <Formik
        initialValues={{ resume: "", message: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.resume) {
            errors.email = "Required";
          }
          //   else if (
          //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          //   ) {
          //     errors.email = "Invalid email address";
          //   }

          if (!values.message) {
            errors.name = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            // alert(JSON.stringify(values, null, 2));
            handleApply();
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form className="" onSubmit={handleSubmit}>
            <div>
              <label className="label">
                <span className="label-text-alt">Name</span>
              </label>
              <p className="border rounded-md border-primary p-2 w-full">
                {role?.name}
              </p>
            </div>
            <div>
              <label className="label">
                <span className="label-text-alt">Email</span>
              </label>
              <p className="border rounded-md border-primary p-2 w-full">
                {role?.email}
              </p>
            </div>
            <div>
              <label className="label">
                <span className="label-text-alt">Resume Link</span>
              </label>
              <input
                className="border rounded-md border-primary p-2 w-full"
                type="url"
                name="resume"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.resume}
              />
              <p className="text-error">
                {errors.resume && touched.resume && errors.resume}
              </p>
            </div>
            <div>
              <label className="label">
                <span className="label-text-alt">Write your Message</span>
              </label>
              <textarea
                className=" border rounded-md border-primary p-2 w-full"
                type="text"
                name="message"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.message}
              />
              <p className="text-error">
                {errors.message && touched.message && errors.message}
              </p>
            </div>
            <div className="flex justify-end w-full pr-4">
              <button
                // className=" btn-sm btn-info "
                type="submit"
                disabled={isSubmitting}
              >
                <label
                  htmlFor="apply-form-modal"
                  className="btn btn-sm btn-info text-white "
                >
                  submit
                </label>
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default ApplyForm;
