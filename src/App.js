import React, { useEffect } from "react";
import "../src/App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";
import Login from "./components/Login/Login";
import { useDispatch } from "react-redux";
import { getUser, loadUser } from "./redux/action/user";
import { useSelector } from "react-redux";
import AdminPanel from "./components/admin/AdminPanel";
import Timeline from "./components/admin/Timeline";
import Projects from "./components/admin/AdminProject";
import AdminProject from "./components/admin/AdminProject";
const App = () => {
  const { isAuthenticated } = useSelector((state) => state.login);
  console.log(isAuthenticated);
  const { loading } = useSelector((state) => state.user);

  const data = useSelector((state) => state.user);
  console.log(data);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  const checkLogin = localStorage.getItem("token");
  return (
    <>
      <Header />{" "}
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/about" element={<About about={data.user} />} />
        <Route path="/project" element={<Project projects={data.user} />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/account"
          element={checkLogin ? <AdminPanel /> : <Login />}
        />
        <Route
          path="/admin/timeline"
          element={checkLogin ? <Timeline /> : <Login />}
        />
        <Route
          path="/admin/project"
          element={checkLogin ? <AdminProject /> : <Login />}
        />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
