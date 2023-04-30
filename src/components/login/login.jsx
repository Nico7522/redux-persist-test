import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginAction } from "../../store/actions/connection.action";

export default function Login() {
  const dispatch = useDispatch();
  const users = { name: "Nicolas", psw: "111" };
  const [name, setName] = useState("");
  const [psw, setPsw] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
   
    if (users.name === name && users.psw === psw) {
      const user = { name: name, psw: psw };
      console.log('isOK');
      dispatch(loginAction(user));
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <label htmlFor="name">Name : </label>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        id="name"
      />
      <label htmlFor="psw">Password : </label>
      <input
        value={psw}
        onChange={(e) => setPsw(e.target.value)}
        type="text"
        id="psw"
      />
      <button type="submit">Log in</button>
    </form>
  );
}
