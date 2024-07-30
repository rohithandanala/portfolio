import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Homepage from "./assets/pages/Homepage";
import Aboutpage from "./assets/pages/About";
import Contact from "./assets/pages/Contact";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },

  {
    path: "About",
    element: <Aboutpage />,
  },
  {
    path: "ContactMe",
    element: <Contact />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
