import { useState, useEffect } from "react";
import { fetchUsers } from "../../api";
import UserCard from "./UserCard";

const UserSelection = () => {
  const [users, setUsers] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchUsers().then(({ users }) => {
      setUsers(users);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  return (
    <div>
      <h3>Log in:</h3>
      <div className="userBody">
        {users.map((user) => {
          return (
            <div className="userCard" key={user.username}>
              <UserCard user={user} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default UserSelection;
