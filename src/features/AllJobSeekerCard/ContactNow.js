import React from "react";
import emailjs from "@emailjs/browser";

const ContactNow = ({ contact }) => {
  const { jobSeekerName, jobSeekerEmail } = contact;

  const sendEmail = (e) => {
    e.preventDefault();
    alert("Email Sent");
    emailjs.sendForm(
      "service_raursji",
      "template_7uqicj6",
      e.target,
      "B4GmTKHfPDuPabhpV"
    );
  };
  return (
    <>
      <input type="checkbox" id="contact-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="contact-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3
            id="recipentName"
            name="recipentName"
            className="text-lg font-bold"
          >
            Contact {jobSeekerName}
          </h3>
          <form onSubmit={sendEmail} className="grid grid-cols-1 gap-3">
            <input
              type="text"
              value={jobSeekerName}
              name="recipentName"
              id=""
              className="input input-bordered input-primary w-full"
            />
            <input
              type="email"
              value={jobSeekerEmail}
              name="recipentEmail"
              id=""
              className="input input-bordered input-primary w-full"
            />
            <input
              type="text"
              placeholder="Your Name"
              name="name_from"
              id="nameFrom"
              className="input input-bordered input-primary w-full"
            />
            <input
              type="email"
              placeholder="Your Email"
              name="email_from"
              id="emailFrom"
              className="input input-bordered input-primary w-full"
            />
            <input
              type="text"
              placeholder="Your Message"
              name="message"
              id="message"
              className="input input-bordered input-primary w-full h-32"
            />
            <input
              className="btn btn-outline w-full"
              type="submit"
              value="Send Email"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactNow;
