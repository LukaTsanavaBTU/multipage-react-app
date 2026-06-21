import { useEffect, useState } from "react";
import "./Userspage.css";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: { name: string; catchPhrase: string; bs: string };
}

function Userspage() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((result) => {
        setUsers(result);
      });
  }, []);

  const usersContent = users.map((user) => (
    <div className="user" key={user.id}>
      <img src='icons/user.png' alt="" />
      <div className="user-info">
        <p>Name: {user.name}</p>
        <p>Username: {user.username}</p>
        <p>Email: {user.email}</p>
        <p>City: {user.address.city}</p>
      </div>
    </div>
  ));

  return (
    <>
      {users.length ? (
        <div className="users-wrapper">
          <h2>Contributors:</h2>
          <div className="users-content-wrapper">{usersContent}</div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}

export default Userspage;
