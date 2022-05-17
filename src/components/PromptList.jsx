import { Card } from "react-bootstrap";
import { FaRegHeart, FaRegThumbsDown } from "react-icons/fa";
import { format } from "timeago.js";
import { useState } from "react";
import { IconContext } from "react-icons";

export default function PromptList(props) {
  const { results, loading } = props;
  const [like, setLike] = useState(false);

  function handleLike(e) {
    e.preventDefault();
    setLike(!like);
  }

  if (loading) {
    return (
      <section className="prompt-list w-75 my-4">
        <div className="mw-100">
          <img
            alt="lightbulb loading gif"
            src="https://i.giphy.com/media/dAoHbGjH7k5ZTeQeBI/giphy.webp"
            className="img-fluid"
          />
        </div>
      </section>
    );
  }

  return (
    <section className="prompt-list w-75 my-4">
      {results.map((x) => (
        <Card key={x.prompt + x.text} border="primary" className="my-4" >
          <Card.Body >
            <Card.Title>{x.prompt}</Card.Title>
            <Card.Text>{x.text}</Card.Text>
          </Card.Body>
          <Card.Footer className="text-muted d-flex justify-content-between">
            <span>
              {" "}
              {x.time.toDateString()} / {format(x.time)}{" "}
            </span>

            <IconContext.Provider value={{ color: like ? "red" : "black" }}>
              <div className="footer-icons">
                <FaRegHeart className="heart-icon" onClick={handleLike} />
              </div>
            </IconContext.Provider>
          </Card.Footer>
        </Card>
      ))}
    </section>
  );
}
