import { useSelector, useDispatch } from "react-redux";
import { logout } from "./store/authSlice";
import Login from "./components/Login";

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  return (
    <div className="container text-center">
      {isAuthenticated ? (
        <div>
          <h1>Chào mừng, {user.username}!</h1>
          <button className="btn btn-danger" onClick={() => dispatch(logout())}>
            Đăng xuất
          </button>
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default App;
