import {Card } from "react-bootstrap";
import { FaRegHeart, FaRegThumbsDown } from "react-icons/fa";
import { format } from 'timeago.js';

export default function PromptList(props) {
  const { results } = props;

  return (
    <section className="prompt-list w-75 my-4">
      {results.map((x) => (
        <Card border="primary"  className="my-4">
        <Card.Header>Catchline</Card.Header>
        <Card.Body>
          <Card.Title>{x.prompt}</Card.Title>
          <Card.Text>
          {x.text}
          </Card.Text>
          
        </Card.Body>
        <Card.Footer className="text-muted d-flex justify-content-between">
          <span> {x.time.toDateString()} / {format(x.time)} </span>
          
          <div className="footer-icons">
                <FaRegThumbsDown className="thumbs-down-icon" />
                <FaRegHeart className="heart-icon" />
              </div>
          </Card.Footer>
      </Card>

      ))}
    </section>
  );
}
