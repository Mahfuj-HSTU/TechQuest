import React from "react";
import { Link } from "react-router-dom";

export const Blog = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase sm:text-center">
        16 Feb 2022
      </p>
      <div className="max-w-xl mb-5 md:mx-auto sm:text-center lg:max-w-2xl">
        <div className="mb-4">
          <Link
            href="/"
            aria-label="Article"
            className="inline-block max-w-lg font-sans text-3xl font-extrabold leading-none tracking-tight text-black transition-colors duration-200 hover:text-deep-purple-accent-700 sm:text-4xl"
          >
            Redux : What I've fount out!!
          </Link>
        </div>
        <p className="text-base text-gray-700 md:text-lg">
          After completing a complete web development course and making a lot of
          projects with React, I have been exploring Redux at this moment and I
          can only express that it's nothing but awesome. Redux is a predictable
          state container for JavaScript apps. In fact, Redux is a state
          management library that can be used with any JS library or framework,
          including React, Angular, or Vue, if we look more closely at this
          claim. Redux has a read-only state.Redux is predictable because in
          order to modify the state of the application, we must dispatch an
          action that specifies the changes we want to make. Then, reducers,
          whose sole purpose is to receive two items (the action and the
          existing state of the application) and return a new updated instance
          of the state, consume these actions. Reducers don't alter the state in
          any way. Instead, a reducer creates a fresh instance of the state that
          includes all required modifications. The primary, central container
          for storing all of an application's states is the Redux store. It
          ought to be used and kept up as the only reliable source for the
          application's current status. Anyone wishing to alter the
          application's state must first communicate their desire by emitting or
          dispatching an action. As implied by its name, reducers take two
          inputs: the previous state and an action. Then they distill it down to
          just one thing—the newly updated instance of state—read it back. The
          three rules listed below, in brief, entirely dictate how Redux
          operates: 1. An object tree within a single store houses an
          application's global state. 2. Only emitting an action, which is an
          object explaining what occurred, will cause the state to change. 3. We
          create pure reducers to describe how actions alter the state tree.
        </p>
      </div>
      <div className="mb-10 sm:text-center">
        <Link href="/" aria-label="Author" className="inline-block mb-1">
          <img
            alt="avatar"
            src="https://i.ibb.co/prtJKx3/Kazi-Omar-Faruque.png"
            className="object-cover w-10 h-10 rounded-full shadow-sm"
          />
        </Link>
        <div>
          <Link
            href="/"
            aria-label="Author"
            className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
          >
            Kazi Omar Faruque
          </Link>
          <p className="text-sm font-medium leading-4 text-gray-600">Author</p>
        </div>
      </div>
      <div className="sm:text-center">
        <Link
          href="/"
          aria-label=""
          className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
        >
          Read more
        </Link>
      </div>
    </div>
  );
};
