import { useState } from "react";
function TableUser(props) {
  const players = props.players;
  const search = props.search;

  console.log(search);
  return (
    <>
      <div className="row">
        <div className="col-12 mb-4 mb-lg-0">
          <div className="card">
            <h5 className="card-header">Players Data Table</h5>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">Id</th>
                      <th scope="col">Username</th>
                      <th scope="col">Email</th>
                      <th scope="col">Experience</th>
                      <th scope="col">Level</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {players
                      .filter((player) => {
                        return search.toLowerCase() === ""
                          ? player
                          : player.username.toLowerCase().includes(search) ||
                              player.email.toLowerCase().includes(search) ||
                              +player.experience >= search ||
                              +player.lvl === search;
                      })
                      .map((player) => {
                        return (
                          <tr key={player.id}>
                            <th scope="row">{player.id}</th>
                            <td>{player.username}</td>
                            <td>{player.email}</td>
                            <td>{player.experience}</td>
                            <td>{player.lvl}</td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
              <a href="#" className="btn btn-block btn-light">
                View all
              </a>
            </div>
          </div>
        </div>
        <div className="col-12 col-xl-4"></div>
      </div>
    </>
  );
}
export default TableUser;
