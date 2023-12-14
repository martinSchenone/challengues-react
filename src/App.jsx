import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserRegistration } from "./components/UserRegistration";
import { Welcome } from "./components/Welcome";
import { Todos } from "./components/Todos";
import { Filter } from "./components/Filter";
import { UseReducer } from "./components/UseReducer";
import { UseRef } from "./components/UseRef";

// import { Posts } from "./components/Posts";
// import { BestWaysToFetchData } from "./components/BestWaysToFetchData";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route element={<BestWaysToFetchData/>} path="/"/> */}
          {/* <Route element={<Posts/>} path="/posts"/> */}
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/filter" element={<Filter />} />
          <Route path="/reducer" element={<UseReducer />} />
          <Route path="/ref" element={<UseRef />} />
          <Route path={"/registration"} element={<UserRegistration />} />
          <Route
            path={"/welcome"}
            element={
              <h1>
                <Welcome />
              </h1>
            }
          />
          <Route path={"*"} element={<h1>Page doesn´t exist yet</h1>} />
          <Route path="/todos" element={<Todos />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
