import { useState } from "react";
import axios from "axios";
import { setAuthToken } from "../SetAuthToken";

function LoginRegister() {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // call API untuk Login
      const res = await axios.post("http://localhost:4000/api/v1/login", {
        username,
        password,
      });
      const token = res.data.token;

      // store token in to local storeage
      localStorage.setItem("token", JSON.stringify(token));
      localStorage.setItem("username", username);
      setAuthToken(token);
      window.location.href = "/";
    } catch (error) {
      console.error(error);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:4000/api/v1/players", {
        username,
        email,
        password,
      });
      if (res.data.result === "Success") {
        alert("Registration Succes");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center mt-5">
          <div className="col-md-8 col-lg-6 border p-5 rounded-3 border-1 shadow">
            <ul
              className="nav nav-pills nav-justified mb-3"
              id="ex1"
              role="tablist"
            >
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  id="tab-login"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-login"
                  role="tab"
                  aria-controls="pills-login"
                  aria-selected="true"
                >
                  Login
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link"
                  id="tab-register"
                  data-bs-toggle="pill"
                  data-bs-target="#pills-register"
                  role="tab"
                  aria-controls="pills-register"
                  aria-selected="false"
                >
                  Register
                </button>
              </li>
            </ul>

            <div className="tab-content">
              <div
                className="tab-pane fade show active"
                id="pills-login"
                role="tabpanel"
                aria-labelledby="tab-login"
              >
                <form action="/login" onSubmit={handleLogin}>
                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      id="loginName"
                      className="form-control"
                      placeholder="Username"
                      name="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="loginPassword"
                      className="form-control"
                      placeholder="Password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <div className="d-grid col-12 mx-auto">
                    <button
                      type="submit"
                      className="btn btn-outline-secondary mb-3"
                    >
                      Sign in
                    </button>
                  </div>
                </form>
              </div>
              <div
                className="tab-pane fade"
                id="pills-register"
                role="tabpanel"
                aria-labelledby="tab-register"
              >
                <form
                  action="/register"
                  method="post"
                  onSubmit={handleRegister}
                >
                  <div className="form-outline mb-4">
                    <input
                      type="text"
                      id="registerUsername"
                      className="form-control"
                      placeholder="Username"
                      name="username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="registerUsername"
                      className="form-control"
                      placeholder="Email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="registerPassword"
                      className="form-control"
                      placeholder="Password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <div className="d-grid col-12 mx-auto">
                    <button
                      type="submit"
                      className="btn btn-outline-secondary mb-3"
                    >
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginRegister;
