// import React, { useState } from "react";
// import "./Admin.scss";
// import DeletePopUp from "../UserDelete/DeletePopUp";
// function AdminTable(props) {
//     console.log("proppps", props);
//     const [popup, SetPopup] = useState(false);
//     const [id, setId] = useState("");
//     const { users, getAllUsers } = props;

//     //initilizeDeleteUser

//     const handleDeleteUser = (userid) => {
//         setId(userid);
//         SetPopup(true);
//     };

//     return (
//         <div>
//             {popup === true ? <DeletePopUp SetPopup={SetPopup} id={id} getAllUsers={getAllUsers} /> : ""}
//             <h1 className="info">User Information</h1>

//             <table>
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th>Name</th>
//                         <th>Email</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {users && users.data ? (
//                         users.data.map((user, index) => (
//                             <tr key={index}>
//                                 <td>{index}</td>
//                                 <td>{user.name}</td>
//                                 <td>{user.email}</td>
//                                 <td className="user-delete" onClick={() => handleDeleteUser(user._id)}>
//                                     delete <i className="fa-solid fa-trash"></i>
//                                 </td>
//                             </tr>
//                         ))
//                     ) : (
//                         <tr>
//                             <td colSpan="3">No users available</td>
//                         </tr>
//                     )}
//                 </tbody>
//             </table>
//         </div>
//     );
// }

// export default AdminTable;
