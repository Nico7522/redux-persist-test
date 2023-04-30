import { useDispatch } from "react-redux";
import { logoutAction } from "../../store/actions/connection.action";

export default function Disconnect() {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logoutAction());
  };
  return (
    <button type="submit" onClick={() => handleLogOut()}>
      Log out
    </button>
  );
}
