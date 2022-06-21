import "./Login.css";
import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../Redux/Actions/UserActions";
import Message from "../components/LoadingError/Error";
import Loading from "../components/LoadingError/Loading";

const Login = () => {
  window.scrollTo(0, 0);

  const path = useNavigate();

  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { error, loading, userInfo } = userLogin;

  useEffect(() => {
    if (userInfo) {
      path("/dashboard");
    }
  }, [userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(Username, Password));
  };

  return (
    <>
      <div className="container vh-100">
        <div className="row justify-content-center h-100">
          <div className="card my-auto shadow">
            <div className="card-body px-5">
              {/* <div class="text-center">
              <fa-icon [icon]="faLock" class="fa-3x"></fa-icon>
          </div> */}
              <div className="text-center">
                {/* <h2>Welcome</h2> */}
                <img
                  id="profile-img"
                  src="/assets/img/robot.png"
                  className="profile-img-card"
                />
                {error && <Message variant="alert-danger">{error}</Message>}
                {loading && <Loading />}
              </div>
              <p style={{ color: "lightslategray", textAlign: "center" }}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Please enter
                your login
                details&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </p>
              <form onSubmit={submitHandler}>
                {/* <div className="alert alert-danger">
                  Invalid username or password
                </div> */}
                <div className="form-group">
                  <input
                    type="text"
                    id="username"
                    placeholder="Username"
                    className="form-control"
                    formcontrolname="username"
                    name="username"
                    autoComplete="off"
                    value={Username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    id="password"
                    placeholder="Password"
                    className="form-control"
                    formcontrolname="password"
                    name="password"
                    value={Password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-info w-100">
                  Login
                </button>
              </form>
            </div>
            <div className="card-footer text-right">
              <small>
                <a routerlink="../forgot-password">Forgot Password?</a>
              </small>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
