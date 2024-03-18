import { AccordionButton } from "react-bootstrap";
import Home from "./pages/Home"
import { createBrowserRouter, createRoutesFromElements,   RouterProvider, Route } from "react-router-dom";
import RootLayOut from "./components/root/RootLayOut";
import AboutUs from "./pages/AboutUs";


const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<RootLayOut/>}>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/about" element={<AboutUs/>}></Route>
  </Route>
))


function App() {

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
