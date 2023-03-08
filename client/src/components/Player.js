import { useState, useEffect } from "react";
import axios from "axios";
function Player(props) {
  const player = props.player;
  const token = props.token;

  const [playerData, setPlayerData] = useState(player);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const updateUser = async (token) => {
    try {
      const response = await axios.put(
        `http://localhost:4000/api/v1/players/${player.id}`,
        {
          email,
          password,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.data.result === "Success") {
        alert(response.data.message);
        getNewdata(token);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const getNewdata = async (token) => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/v1/players/${player.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setPlayerData(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const editHandler = (e) => {
    e.preventDefault();
    updateUser(token);
  };

  useEffect(() => {});

  return (
    <>
      <h4>Edit User Player</h4>
      <form method="post" onSubmit={editHandler}>
        <div className="form-outline mb-4">
          <label htmlFor="email">Email: {playerData.email}</label>
          <input
            type="email"
            id="registerUsername"
            className="form-control"
            placeholder="Email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="form-outline mb-4">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            className="form-control"
            placeholder="Password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="d-grid col-12 mx-auto">
          <button type="submit" className="btn btn-outline-secondary mb-3">
            Update User Player
          </button>
        </div>
      </form>
    </>
  );
}
export default Player;
