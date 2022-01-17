import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { loginSuccess } from "../redux/admin/action";

export const Admin = () => {
  const [pass, setPass] = useState("");
  const [username, setUsername] = useState("");

  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.isAuth);
  // const user = useSelector((state) => state.auth.user);

  const handleSubmit = (e) => {
    let payload = { username, pass };
    e.preventDefault();
    fetch("https://masai-api-mocker.herokuapp.com/auth/login", {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((d) => d.json())
      .then((res) => {
        console.log(res);
        dispatch(loginSuccess(res));
      });
  };
  if (isAuth) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div>
      <h1> Admin Login Form</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter Username" onChange={(e) => setUsername(e.target.value)} />
        <br />
        <input type="password" placeholder="Enter Password" onChange={(e) => setPass(e.target.value)} />
        <br />
        <input type="submit" />
      </form>
      <div></div>
    </div>
  );
};
