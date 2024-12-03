import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/authSlice";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      dispatch(login({ username }));
      alert("Đăng nhập thành công!");
    } else {
      alert("Vui lòng nhập đầy đủ thông tin.");
    }
  };

  return (
    <div
      className="container-fluid"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f0f2f5",
      }}
    >
      <div className="col-md-4">
        <div
          className="panel panel-default"
          style={{
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            borderRadius: "8px",
          }}
        >
          <div className="panel-heading text-center">
            <h3 className="panel-title">Đăng Nhập</h3>
          </div>
          <div className="panel-body">
            <form onSubmit={handleLogin}>
              <div className="form-group text-left">
                <label htmlFor="username" className="control-label">
                  Tên đăng nhập
                </label>
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="glyphicon glyphicon-user"></i>
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    placeholder="Nhập tên đăng nhập"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group text-left">
                <label htmlFor="password" className="control-label">
                  Mật khẩu
                </label>
                <div className="input-group">
                  <span className="input-group-addon">
                    <i className="glyphicon glyphicon-lock"></i>
                  </span>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Nhập mật khẩu"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-group">
                <button type="submit" className="btn btn-primary btn-block">
                  Đăng Nhập
                </button>
              </div>
              <div className="text-center">
                <a href="#" className="text-muted">
                  Quên mật khẩu?
                </a>
              </div>
            </form>
          </div>
          <div className="panel-footer text-center">
            Bạn chưa có tài khoản?
            <a href="#" className="text-primary">
              {" "}
              Đăng ký
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
