import { useContext } from "react";
import NavigationContext from "../context/navigation";

function Link({ to, children }) {
  const { navigate } = useContext(NavigationContext);

  const handleClick = (event) => {
    event.preventDefault();
    navigate(to);
    console.log("User navigating to:", to);
  };

  return <a onClick={handleClick}>{children}</a>;
}

export default Link;
