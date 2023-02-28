import React from "react";
import { Link } from "react-router-dom";

export const Blog = () => {
  return (
    <div className="max-w-[1140px] mx-auto">
      <div className="mx-10">
        <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase text-center">
          23 Feb 2022
        </p>
        <div className="mb-5">
          <div className="mb-4">
            <Link
              href="/"
              aria-label="Article"
              className="inline-block md:text-3xl font-bold text-black text-xl"
            >
              Vite 3.0 vs. Create React App: Comparison and migration guide
            </Link>
            <img
              className="my-5 mx-auto"
              src="https://blog.logrocket.com/wp-content/uploads/2022/08/vite-3-vs-create-react-app.png"
              alt=""
            />
          </div>
          <p className="text-base text-justify text-gray-700 md:text-lg">
            Create React App (CRA) has played a pivotal role in the development
            of React’s community and its ecosystem at large. It is the tool of
            choice for developers of different skill sets when it comes to
            constructing a local React development environment on a whim. CRA
            boasts several standout features that make it hard to overlook, the
            most prominent ones being: local development server, Hot Module
            Replacement (HMR), and production bundling. CRA does, however, have
            a significant drawback, which is progressive speed and performance
            deterioration. As an application grows in size and complexity,
            Create React App’s performance tends to dip, and the time it takes
            to start a development server increases significantly. This makes
            CRA unfit for production. In this guide, we’ll introduce Vite, a
            build tool built on esbuild. We’ll cover everything you need to know
            to start building React applications with Vite. We’ll also review
            the differences between Vite vs. CRA and demonstrate how to migrate
            from Create React App to Vite.
            <br />
            <h4 className="text-xl font-bold">Prerequisites</h4>
            To follow along with the tutorial portion of this article, you’ll
            need the following:
            <br />
            1.Node.js v14.18 or higher
            <br />
            2.A browser with support for native ES modules (ESM) and dynamic
            imports; most modern browsers have this support
            <br />
            3.A package manager, such as npm or Yarn
            <br />
            <h4 className="text-xl font-bold">What is Vite?</h4>
            Vite is a build tool that aims to bridge the gap between current and
            next-generation web development. It focuses on providing a faster
            and more performant experience for developers and modern web
            projects. Vite is built on top of esbuild, a JavaScript bundler
            written in Go, which bundles dependencies 10-100 times faster than
            JavaScript-based bundlers. Vite was created by Evan You, the creator
            of Vue.js. However, it is platform-agnostic, meaning it can be used
            used to develop JavaScript/TypeScript applications with support for
            popular libraries such as React, Svelte, Preact, and even vanilla
            JavaScript. Vite leverages the browser’s native ESM to parse and
            compile your code as the browser requests it. Then it serves the
            source file using a plugin such as Koa (a lightweight Node.js web
            server) to create a dev server with support for Hot Module
            Replacement (HMR) for updating served modules and Rollup for
            production builds.
            <br />
            <h4 className="text-xl font-bold">Why use Vite?</h4>
            We previously reviewed a few advantages of using Vite for React app
            development. Now, let’s take a closer look at Vite’s benefits.
            <br />
            <h4 className="text-xl font-bold">Superior performance</h4>
            During the pre-bundling process, Vite converts dependencies that are
            shipped as CommonJS or UMD into ESM. This conversion occurs because
            Vite only supports ESM and serves native ESM codes by default. Vite
            can convert dependencies with many internal modules into a single
            module to improve page load performance. These modules tend to fire
            hundreds of requests at the same time, which could create congestion
            in the browser and negatively impact load time. But, by pre-bundling
            these dependencies into a single file, they only need to send one
            request, thereby increasing overall performance.
            <br />
            <h4 className="text-xl font-bold">
              Extensive plugin compatibility
            </h4>
            Vite leverages the Rollup plugin interface to improve a developer’s
            experience by allowing them to rely on the mature ecosystem of
            Rollup plugins. In other words, Vite is compatible with most Rollup
            plugins out of the box.
            <br />
            <h4 className="text-xl font-bold">Faster updates</h4>
            We previously explained how HMR speed deteriorates significantly in
            a bundled-based server as the size of the application increases. In
            Vite, HMR is performed over native ESM. When changes occur in a
            module that accepts hot updates, Vite only needs to precisely
            invalidate the module. This results in a faster HMR update time,
            regardless of the size of the application.
            <br />
            <h4 className="text-xl font-bold">Faster build time</h4>
            Vite uses pre-configured Rollup to build apps for production. Rollup
            is a more efficient bundler than webpack, so Vite’s build time tends
            to be quicker than that of CRA, and its output is smaller in size
            <br />
            <h4 className="text-xl font-bold">
              Setting up a React project with Vite 3.0
            </h4>
            To create a Vite app, go to your machine’s terminal, cd to a
            preferred folder, and run the following command:
            <br />
            npm create vite@latest
            <br />
            After running the command, the CLI will prompt you to provide a
            project name. In our case, we’ll use the default name vite-project.
            Next, we’ll select react from the list of available templates. This
            usually takes 10s or less.
            <br />
            Next, cd into the project folder, install the necessary
            dependencies, and start the dev server with the following commands:
            <br />
            cd vite-project
            <br />
            npm install
            <br />
            npm run dev
            <br />
            After these commands run, a development server will be up and
            running on port 5173. It usually takes Vite just 1325ms to serve an
            application.
            <br />
            That’s it! We’ve successfully set up a Vite React development
            environment! Next, we’ll look at how to migrate a Create React App
            project to Vite.
          </p>
        </div>
        <div className="mb-10 sm:text-center">
          <Link
            href="/"
            aria-label="Author/Source"
            className="inline-block mb-1"
          >
            <img
              alt="avatar"
              src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_170,w_170,f_auto,b_white,q_auto:eco,dpr_1/v1494269537/n7wzgxpzhmc16a48cazh.png"
              className="object-cover w-10 h-10 rounded-full shadow-sm"
            />
          </Link>
          <div>
            <Link
              href="/"
              aria-label="Author"
              className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
            >
              LogRocket:Frontend Analytics Website
            </Link>
            <p className="text-sm font-medium leading-4 text-gray-600">
              Author/Source
            </p>
          </div>
        </div>
      </div>
      <div className="px-4 mx-10 ">
        <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase sm:text-center">
          16 Feb 2022
        </p>
        <div className="mb-5 ">
          <div className="mb-4">
            <Link
              href="/"
              aria-label="Article"
              className="inline-block max-w-lg font-sans text-3xl font-bold"
            >
              Redux : What I've fount out!!
            </Link>
            <img
              className="my-5 w-96 mx-auto"
              src="https://upload.wikimedia.org/wikipedia/commons/3/30/Redux_Logo.png"
              alt=""
            />
          </div>
          <p className="text-base text-justify text-gray-700 md:text-lg">
            After completing a complete web development course and making a lot
            of projects with React, I have been exploring Redux at this moment
            and I can only express that it's nothing but awesome. Redux is a
            predictable state container for JavaScript apps. In fact, Redux is a
            state management library that can be used with any JS library or
            framework, including React, Angular, or Vue, if we look more closely
            at this claim. Redux has a read-only state.Redux is predictable
            because in order to modify the state of the application, we must
            dispatch an action that specifies the changes we want to make. Then,
            reducers, whose sole purpose is to receive two items (the action and
            the existing state of the application) and return a new updated
            instance of the state, consume these actions. Reducers don't alter
            the state in any way. Instead, a reducer creates a fresh instance of
            the state that includes all required modifications. The primary,
            central container for storing all of an application's states is the
            Redux store. It ought to be used and kept up as the only reliable
            source for the application's current status. Anyone wishing to alter
            the application's state must first communicate their desire by
            emitting or dispatching an action. As implied by its name, reducers
            take two inputs: the previous state and an action. Then they distill
            it down to just one thing—the newly updated instance of state—read
            it back. The three rules listed below, in brief, entirely dictate
            how Redux operates: 1. An object tree within a single store houses
            an application's global state. 2. Only emitting an action, which is
            an object explaining what occurred, will cause the state to change.
            3. We create pure reducers to describe how actions alter the state
            tree.
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
            <p className="text-sm font-medium leading-4 text-gray-600">
              Author/Source
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
