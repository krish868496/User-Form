import React from 'react'
import { AiFillDelete } from "react-icons/ai";
import { AiTwotoneEdit } from "react-icons/ai";

const Card = ({users, handleDelete, handleEdit}) => {
  return (
    <div className="main-card">
      {users.map((user, index) => (
        <div key={index}>
          <div className="card">
            <p>{user.username}</p>
            <p>{user.email}</p>
            <p>{user.phone}</p>
            <button onClick={() => handleDelete(index)}><AiFillDelete className='delete'/></button>
            <button onClick={() => handleEdit(index)}><AiTwotoneEdit className='edit'/></button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card