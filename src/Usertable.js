import React from "react";
 
const user = [
    { id: 1, name:  'Muzammil', age: 21},
    { id: 2, name:  'Ali', age: 22},
];
const tbstyle = {
     border :"1px solid #b33d3dff",
     padding: "8px",
     textAlign: "center"
};
const UserTable = () => (
    <table style={tbstyle}>
        <thead>
            <tr>
                <th style={tbstyle}>ID</th>
                <th style={tbstyle}>Name</th>
                <th style={tbstyle}>Age</th>
            </tr>
        </thead>
        <tbody style ={{color: "blue"}}>
            {user.map(u =>(
                <tr key={u.id}>
                    <td style={tbstyle}>{u.id}</td>
                    <td style={tbstyle}>{u.name}</td>
                    <td style={tbstyle}>{u.age}</td>
                </tr>
            ))}
        </tbody>
    </table>
);
export default UserTable;