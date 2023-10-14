import "./App.css";
import Nav from "./components/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SignUp from "./components/SignUp";
// In this Project we will be using React-router-dom for Routing
// To use react-router-dom, we have to encase its components(Link,Routes...) in
//<BrowserRouter></BrowserRouter>

//using React-router looks easy compared to going thru with fetch api method
// where explicit dev is more expected

//LINK - is the element which is used to navigate through routes... just like <a></a>
//ROUTE - defines what needs to be rendered When the UI url matches its path.

// i m guessing, we can pass components to ROUTE.element

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />

        <Routes>
          <Route path="/" element={<Header />}></Route>
          <Route path="/add" element={<h1>Add Product component</h1>}></Route>
          <Route
            path="/update"
            element={<h1>Update Product component</h1>}></Route>
          <Route path="/logout" element={<h1>Logout component</h1>}></Route>
          <Route path="/profile" element={<h1>Profile component</h1>}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>

        <h1>E_Dashboard</h1>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
