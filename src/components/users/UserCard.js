import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";

const UserCard = ({ user }) => {
  const { SetCurrentUser } = useContext(UserContext);

  const changeUser = () => {
    SetCurrentUser(user);
  };

  return (
    <div className="userContainer" onClick={changeUser}>
      <span className="userImageContainer">
        <img src={user.avatar_url}></img>
      </span>
      <p>{user.username}</p>
    </div>
  );
};

export default UserCard;
