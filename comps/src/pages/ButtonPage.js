import { GoBell, GoEyeClosed } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa";
import Button from "../components/Button";

function ButtonPage() {
  const handleClick = () => {
    console.log("CLICKED");
  };

  return (
    <div>
      <div>
        <Button primary rounded onClick={handleClick}>
          <GoBell />
          Hello?
        </Button>
      </div>
      <div>
        <Button secondary outline>
          <GoEyeClosed />
          Is anyone there?
        </Button>
      </div>
      <div>
        <Button success>
          <FaLinkedin />
          ...anybody??
        </Button>
      </div>
      <div>
        <Button warning outline>
          Tailwind Baby!!
        </Button>
      </div>
      <div>
        <Button danger rounded outline>
          Classes for Days
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
