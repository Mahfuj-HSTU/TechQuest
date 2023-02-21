import React from "react";
import emailjs from "@emailjs/browser";

const ContactNow = ({ contact }) => {
  const { name , email } = contact;

  const sendEmail = (e) => {
    e.preventDefault();
    alert("Email Sent");
    emailjs.sendForm(
      "service_gvok9j2",
      "template_63cz797",
      e.target,
      "b3uAiwcP517FMtPsH"
    );
  };
  return (
    <div className="">
      <input type="checkbox" id="contact-modal" className="modal-toggle " />
      <div className="modal">
        <div className="modal-box">
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
            Contact {name}
          </h3>
          <form onSubmit={sendEmail} className="grid grid-cols-1 gap-3">
            <input
              type="text"
              value={name}
              name="recipentName"
              id=""
              className="input input-bordered input-primary w-full"
            />
            <input
              type="email"
              value={email}
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
    </div>
  );
};

export default ContactNow;
