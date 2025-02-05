import React, { useEffect, useState } from "react";
import "./Admin.scss";
import axios from "axios";
import AdminTable from "../AdminTable/AdminTable";
import Loading from "../Loading/Loading";
import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
import TaskForm from "../TaskForm/TaskForm";
import { useNavigate } from "react-router-dom";
import ProjectTable from "../ProjectTable/ProjectTable";
import Cookies from "js-cookie";

function Admin() {
    const user = useSelector((state) => console.log(state.user));

    const [users, setUser] = useState([]);
    const [project, setProject] = useState([]);
    const [load, setLoad] = useState(false);
    const [openFrom, setOpenForm] = useState(false);
    const API_URL = "http://localhost:3005";
    const navigate = useNavigate();

    const handleForm = () => {
        setOpenForm(true);
    };

    const getAllProject = async () => {
        try {
            setLoad(true);
            const response = await axios.get("http://localhost:3005/api/admin/getUsersproject");
            const data = await response.data;
            setProject(data);
            setLoad(false);
        } catch (error) {}
    };
    // initilize logoutFunction

    const logout = () => {
        Cookies.remove("token");
        localStorage.clear("userInfo");
        navigate("/login");
    };

    useEffect(() => {
        // getAllUsers();
        getAllProject();
    }, []);

    return (
        <div className="admin-container">
            {openFrom === true ? <TaskForm setOpenForm={setOpenForm} getAllProject={getAllProject} /> : ""}

            <div className="admin-page">
                <div className="slide-bar">
                    <div className="brand-name">
                        {" "}
                        <h3>
                            Noted <i className="fa-solid fa-pen"></i>
                        </h3>
                    </div>

                    <div className="nav">
                        <span style={{ color: "white" }} onClick={handleForm}>
                            CreateNewTak{" "}
                        </span>

                        <span style={{ color: "white" }} onClick={logout}>
                            LogOUt
                        </span>
                    </div>
                </div>
                <div className="main-page">
                    <div className="header">
                        <h2>Dashboard</h2>

                        {/* <div className="search">
                            {" "}
                            <input type="search" className="search-input" placeholder="search userName" />
                        </div> */}

                        <button
                            className="logOut"
                            onClick={logout}
                            style={{ color: "white", background: " #ff7801", cursor: "pointer" }}
                        >
                            LogOut
                        </button>
                    </div>

                    <div className="user-details">
                        {/* {load !== true ? <AdminTable users={users} getAllUsers={getAllUsers} /> : <Loading />} */}
                        {load !== true ? <ProjectTable project={project} getAllProject={getAllProject} /> : <Loading />}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Admin;
