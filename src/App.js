import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes/Routes";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import AOS from "aos";
import "aos/dist/aos.css";
import { useState } from "react";
import Loader from "./Loader/Loader";
import { useEffect } from "react";
// ..
AOS.init();

const queryClient = new QueryClient();

function App() {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2500);
  }, []);

  return (
    <div>
       {loader ? (
        <Loader />
      ) : (
        <div className="App">
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router}></RouterProvider>
      </QueryClientProvider>
    </div>
    
      )}
    </div>
  );
}

export default App;
