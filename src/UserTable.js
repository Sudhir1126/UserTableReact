import React from 'react';
import './UserTable.css';

function UserTable() {
  const usersData = [
    {
      firstName: 'John',
      lastName: 'Doe',
      gender: 'Male',
      email: 'john@example.com',
      username: 'johndoe',
      university: 'University A',
    },
    {
      firstName: 'Jane',
      lastName: 'Smith',
      gender: 'Female',
      email: 'jane@example.com',
      username: 'janesmith',
      university: 'University B',
    },
    {
      firstName: 'Bob',
      lastName: 'Johnson',
      gender: 'Male',
      email: 'bob@example.com',
      username: 'bobjohnson',
      university: 'University C',
    },
    {
      firstName: 'Alice',
      lastName: 'Williams',
      gender: 'Female',
      email: 'alice@example.com',
      username: 'alicewilliams',
      university: 'University D',
    },
    {
      firstName: 'Sam',
      lastName: 'Brown',
      gender: 'Male',
      email: 'sam@example.com',
      username: 'sambrown',
      university: 'University E',
    },
  ];

  return (
    <div className="user-table">
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Username</th>
            <th>University</th>
          </tr>
        </thead>
        <tbody>
          {usersData.map((user, index) => (
            <tr key={index}>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.gender}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.university}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserTable;

