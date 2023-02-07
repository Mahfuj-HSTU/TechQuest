import { useQuery } from "@tanstack/react-query";
import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { ServerLink } from "../../../Hooks/useServerLink";
import { useParams } from "react-router-dom";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PK);

const CoursePayment = () => {
  const { id } = useParams();
  //   console.log(id);
  const { data: course } = useQuery({
    queryKey: ["course"],
    queryFn: async () => {
      const res = await fetch(`${ServerLink}/courses/${id}`);
      const data = await res.json();
      return data;
    },
  });

  // console.log(course);

  return (
    <div>
      <h1 className="text-4xl font-semibold my-5">
        Payment for: <strong>{course?.title}</strong>
      </h1>
      <p>
        Please Pay <strong>{course?.price} </strong>
        for: '{course?.title}'.
      </p>
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm myOrderId={id}></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
};

export default CoursePayment;
