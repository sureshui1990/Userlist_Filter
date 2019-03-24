import React from 'react';

const UserList = ({ userList }) => {

    return <React.Fragment>
                {userList && userList.map((user) => {
                  return <li key={user.id}>
                    <div><b>User Id: </b>{user.id} </div>
                    <div> <b>First Name :</b>{user.first_name}</div>
                    <div><b>Last Name :</b>{user.last_name}</div>
                    <div><b>Avatar :</b> <img src={user.avatar} title={user.first_name+ ''+user.last_name} alt={user.first_name+ ''+user.last_name} /></div>
                  </li>
                })}
    </React.Fragment>
  }
export default UserList;