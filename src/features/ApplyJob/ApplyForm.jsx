import React from "react";
import { Formik } from "formik";
import { useSelector } from "react-redux";

const ApplyForm = () => {
  const stateData = useSelector((state) => state);
  const { role } = stateData.roleReducer;
  const jobDetailsData = stateData.jobDetailsReducer.jobDetails;
  // console.log(role);
  return (
    <div>
      <h1 className="text-2xl my-2 font-bold">
        Applying For: {jobDetailsData.jobTitle}{" "}
      </h1>
      <Formik
        initialValues={{ email: "", name: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email address";
          }

          if (!values.name) {
            errors.name = "Required";
          }

          if (!values.resume) {
            errors.resume = "Required";
          }

          if (!values.message) {
            errors.message = "Required";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
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
              <input
                className="border rounded-md border-primary p-2 w-full"
                value={role?.name}
                readOnly
              />
            </div>
            <div>
              <label className="label">
                <span className="label-text-alt">Email</span>
              </label>
              <input
                className="border rounded-md border-primary p-2 w-full"
                value={role?.email}
                readOnly
              />
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
                className="btn btn-sm btn-info "
                type="submit"
                disabled={isSubmitting}
              >
                Submit
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default ApplyForm;
