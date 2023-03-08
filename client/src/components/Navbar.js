function Navbar(props) {
  const username = props.username;

  const searchHandler = (e) => {
    props.search(e.target.value);
  };
  const editHandler = (e) => {
    e.preventDefault();
    props.edit(true);
  };
  const logoutHandler = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("username");
  };
  return (
    <>
      <nav className="navbar navbar-light bg-light p-3">
        <div className="d-flex col-12 col-md-3 col-lg-2 mb-2 mb-lg-0 flex-wrap flex-md-nowrap justify-content-between">
          <a className="navbar-brand" href="/">
            {" "}
            Bi Games Dashboard{" "}
          </a>
          <button
            className="navbar-toggler d-md-none collapsed mb-3"
            type="button"
            data-toggle="collapse"
            data-target="#sidebar"
            aria-controls="sidebar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="col-12 col-md-4 col-lg-2">
          <input
            className="form-control form-control-dark"
            type="text"
            placeholder="Search Player"
            aria-label="Search"
            onChange={searchHandler}
          />
        </div>
        <div className="col-12 col-md-5 col-lg-8 d-flex align-items-center justify-content-md-end mt-3 mt-md-0">
          <div className="dropdown">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Hello, {username}
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <li>
                <a className="dropdown-item" href="/" onClick={editHandler}>
                  Edit User Player
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="/" onClick={logoutHandler}>
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
