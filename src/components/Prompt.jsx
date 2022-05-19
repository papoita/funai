import { Card } from "react-bootstrap";
import { FaHeart, FaThumbsDown, FaLightbulb } from "react-icons/fa";
import { format } from "timeago.js";
import { IconContext } from "react-icons";
import useActions from "../hooks/useActions";

export default function Prompt(props) {
  const { id, prompt, text, time, setResults, like, thumbsDown, lightBulb } = props;
  const {
    currentLike,
    currentThumbsDown,
    currentLightBulb,
    handleLike,
    handleThumbsDown,
    handleLightBulb,
  } = useActions({setResults, like, thumbsDown, lightBulb});

  return (
    <Card border="primary" className="my-4 card-prompt">
      <Card.Body>
        <Card.Title>{prompt}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex justify-content-between">
        <span>
          {" "}
          {time.toDateString()} / {format(time)}{" "}
        </span>
        <div
          className="footer-icons d-flex justify-content-between "
          style={{ width: "15%" }}
        >
          <IconContext.Provider value={{ color: currentLike ? "tomato" : "black" }}>
            <FaHeart onClick={() => handleLike(id)} />
          </IconContext.Provider>
          <IconContext.Provider
            value={{ color: currentThumbsDown ? "royalblue" : "black" }}
          >
            <FaThumbsDown onClick={() => handleThumbsDown(id)} />
          </IconContext.Provider>
          <IconContext.Provider
            value={{ color: currentLightBulb ? "gold" : "black" }}
          >
            <FaLightbulb onClick={() => handleLightBulb(id)} />
          </IconContext.Provider>
        </div>
      </Card.Footer>
    </Card>
  );
}
