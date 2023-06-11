import React, { useEffect, useState } from "react";


const Message = ({ socket }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    socket?.on("getUser", (newUser) => {
        console.log(newUser)
        setUsers(prev=> [...prev, newUser])
    });

    return () => socket?.off('getUsers');
  }, [socket, users]);   

  
  return (
    <div className="side-container">
      <h5 className="px-4 pb-3 border-bottom">Message</h5>
      {
        users.length > 0 && users.map((user) => (
          <div
            key={user.id}
            className="d-flex justify-content-between px-4 py-3 border-bottom"
            style={{ cursor: "pointer" }}
          >
            <div className="d-flex gap-3">
              <img
                src="https://pbs.twimg.com/media/FjU2lkcWYAgNG6d.jpg"
                className="rounded"
                style={{ width: 40, height: 40, objectFit: "cover" }}
              />
              <div>
                <p className="mb-1 fs-5">{user.username}</p>
                <p className="mb-1">Hellow I would like to be...</p>
              </div>
            </div>
            {/* <span>1m</span> */}
          </div>
        ))}
        {users.length === 0 && <div>No users</div>}
    </div>
  );
};

export default Message;
