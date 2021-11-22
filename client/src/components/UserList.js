import React from 'react';

import { useSelector } from "react-redux";

import "./UserList.css";

const UserListItem = ({ user }) => {
  return (
    <div className="user-list-item">
      <i className="fas fa-user-circle"></i>
      <span className="user-list-item__text disable-select">{user.username}</span>
    </div>
  );
};

const UserList = () => {
  const users = useSelector(state => state.userList.onlineUsers);

  return (
    <div className="user-list">
      <div className="user-list__header disable-select">ONLINE — {users.length}</div>
      {users.map((user) => <UserListItem key={user.id} user={user} />) }
    </div>
  )
}

export default UserList
