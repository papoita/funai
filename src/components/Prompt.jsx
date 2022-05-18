import { useState } from "react";
import { Card } from "react-bootstrap";
import { FaRegHeart } from "react-icons/fa";
import { format } from "timeago.js";
import { IconContext } from "react-icons";

export default function Prompt(props) {
  const { id, prompt, text, time } = props;
  const [like, setLike] = useState(false);

  function handleLike() {
    setLike(!like);
  }

  return (
    <Card key={id} border="primary" className="my-4">
      <Card.Body>
        <Card.Title>{prompt}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex justify-content-between">
        <span>
          {" "}
          {time.toDateString()} / {format(time)}{" "}
        </span>
        <div className="footer-icons">
          <IconContext.Provider value={{ color: like ? "red" : "black" }}>
            <FaRegHeart className="heart-icon" onClick={() => handleLike(id)} />
          </IconContext.Provider>
        </div>
      </Card.Footer>
    </Card>
  );
}
