import React from "react";
import "./ProjectDelete.scss";
import axios from "axios";
import Swal from "sweetalert2";

function ProjectDelete(props) {
    const { setOpen, id, getAllProject } = props;

    const API_URL = "http://localhost:3005/api/admin/deleteTask";

    const DeleteProject = async () => {
        console.log("Delete_id", id);
        try {
            const response = await axios.post(
                `${API_URL}`,
                { id },
                {
                    headers: { "Content-Type": "application/json" },
                }
            );
            if (response.status === 201) {
                setOpen(false);
                Swal.fire({
                    icon: "success",
                    title: "Deleted Successfully",
                    text: "The project has been removed from the list.",
                    showConfirmButton: false,
                    timer: 2000,
                });
                getAllProject();
            }
        } catch (error) {}
    };

    return (
        <div className="popup-overlay">
            <div className="popup">
                <h2>Are you sure?</h2>
                <p> "Do you really want to delete this item? This process cannot be undone</p>
                <div className="popup-buttons">
                    <button className="btn confirm-btn" onClick={DeleteProject}>
                        Yes, Delete
                    </button>
                    <button className="btn cancel-btn" onClick={() => setOpen(false)}>
                        cancel
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProjectDelete;
