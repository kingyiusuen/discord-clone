import React from 'react';

import "./UserList.css";

const UserListItem = ({ user }) => {
  return (
    <div className="user-list-item">
      <i className="fas fa-user-circle"></i>
      <span className="user-list-item__text disable-select">{user}</span>
    </div>
  );
};


const UserList = () => {
  const users = ["john.doe", "jane.doe"];

  return (
    <div className="user-list">
      <div className="user-list__header disable-select">ONLINE — 36</div>
      {users.map((user, index) => <UserListItem key={index} user={user} />) }
    </div>
  )
}

export default UserList
