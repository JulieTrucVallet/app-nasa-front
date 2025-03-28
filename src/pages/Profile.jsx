import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../context/authContext";

const Profile = () => {
  const { handleLogout } = useContext(AuthContext);
  const [infoUser, setInfoUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  });

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.patch(
        "http://localhost:8010/profile",
        setInfoUser
      );
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.delete("http://localhost:8010/profile");
      handleLogout();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <h1>Profile</h1>
      <form
        onSubmit={(e) =>
          handleUpdate(e, first_name, last_name, email, password)
        }
      >
        <input
          id="first_name"
          name="first_name"
          type="text"
          required
          autoComplete="first_name"
          onChange={(e) => setInfoUser.first_name(e.target.value)}
        />
        <input
          id="last_name"
          name="last_name"
          type="text"
          required
          autoComplete="last_name"
          onChange={(e) => setInfoUser.last_name(e.target.value)}
        />
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          onChange={(e) => setInfoUser.email(e.target.value)}
        />
        <input
          id="password"
          name="password"
          type="password"
          placeholder="*******"
          required
          autoComplete="current-password"
          onChange={(e) => setInfoUser.password(e.target.value)}
        />
        <p>First Name : {infoUser.first_name}</p>
        <p>Last Name : {infoUser.last_name}</p>
        <p>Email : {infoUser.email_name}</p>
        <p>Password : </p>
        <div>
          <button type="submit">Edit profile</button>
          <button onClick={handleDelete}>Delete</button>
        </div>
      </form>
    </>
  );
};

export default Profile;
