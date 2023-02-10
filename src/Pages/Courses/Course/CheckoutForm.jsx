import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import toast from "react-hot-toast";
import axios from "axios";
import { ServerLink } from "../../../Hooks/useServerLink";
import { AuthContext } from "../../../context/AuthProvider/AuthProvider";

const CheckoutForm = ({ myOrderId }) => {
  const stripe = useStripe();
  const { user } = useContext(AuthContext);
  const elements = useElements();
  const [cardError, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    // Use your card Element with other Stripe.js APIs
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
      console.log("[error]", error);
    } else {
      setError("");
      //   console.log('[PaymentMethod]', paymentMethod.id);
      if (paymentMethod.id) {
        toast.success("Payment successful");
        axios
          .post(`${ServerLink}/courses/payment/${myOrderId}/${user?.email}`)
          .then((data) => {
            if (data.data.acknowledged) {
              navigate("/job-seeker/courses");
            }
          })
          .catch((e) => {
            console.error("payment update error => ", e);
          });
      }
    }
  };

  //   console.log(myOrderId);

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-col md:flex-row md:items-center">
        <CardElement
          className="my-5 md:flex-none input input-bordered w-auto mx-3 md:mx-5 md:w-96"
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button
          className="bg-green-600 h-10 w-56 mx-auto md:mx-0 rounded-lg text-white btn-sm"
          type="submit"
          disabled={!stripe}
        >
          Pay
        </button>
      </div>
      <p className="text-error">{cardError}</p>
    </form>
  );
};

export default CheckoutForm;
