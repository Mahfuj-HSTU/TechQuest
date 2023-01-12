import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes/Routes";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import AOS from "aos";
import "aos/dist/aos.css";
// ..
AOS.init();

const queryClient = new QueryClient();

function App () {
  return (
    <div className="App">
      <QueryClientProvider client={ queryClient }>
        <RouterProvider router={ router }></RouterProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
