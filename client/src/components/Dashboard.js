import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import TableUser from "./TableUser";
import Player from "./Player";
import Footer from "./Footer";

function Dashboard() {
  const [players, setPlayers] = useState([]);
  const [player, setPlayer] = useState({});
  const [search, setSearch] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const username = localStorage.getItem("username");
  const storedToken = localStorage.getItem("token");
  const token = JSON.parse(storedToken);

  const getPlayers = async (token) => {
    try {
      const response = await axios.get("http://localhost:4000/api/v1/players", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setPlayers(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getPlayer = async (token) => {
    try {
      const response = await axios.get(
        `http://localhost:4000/api/v1/players/username/${username}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setPlayer(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const searchHandler = (query) => {
    setSearch(query);
  };
  const editHandler = (isEdit) => {
    setIsEdit(isEdit);
  };

  useEffect(() => {
    if (token) {
      getPlayers(token);
      getPlayer(token);
    }
  }, []);

  return (
    <>
      <Navbar username={username} search={searchHandler} edit={editHandler} />
      <div className="container-fluid">
        <div className="row">
          <nav id="sidebar" className="col-md-3 col-lg-2 d-md-block bg-light">
            <Sidebar />
          </nav>
          <main className="col-md-9 ml-sm-auto col-lg-10 px-md-4 py-4">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Overview
                </li>
              </ol>
            </nav>
            <h1 className="h2">Dashboard</h1>
            <p>This is the User Player Dashboard</p>
            {/* <!-- cards --> */}
            {/* <%- include("components/cards.ejs", {players, topExperiencePlayer,
          topLevelPlayer, percentagePlayerGain}) %> */}
            {isEdit ? (
              <Player player={player} token={token} />
            ) : (
              <TableUser players={players} search={search} />
            )}

            <Footer />
          </main>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
