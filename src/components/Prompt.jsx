import { FaRegHeart, FaRegThumbsDown } from 'react-icons/fa';

export default function Prompt() {
  const prompt = {
    body: "Write a catchline about a garden center",
    age: "10 minutes ago",
  };

  return (
    <div>
      <article className="prompt">
        <header>
          <h2 className="prompt-type">{prompt.type}</h2>
        </header>
        <div className="prompt-body">{prompt.body}</div>
        <footer className="prompt-footer">
          <small className="footer-age">{prompt.age}</small>
          <small>
            <span className="footer-actions">
              <a href="one">
                <i className="thumbs-down-icon"><FaRegThumbsDown /></i>
              </a>
              <a href="one">
                <i className="heart-icon"><FaRegHeart /></i>
              </a>
            </span>
          </small>
        </footer>
      </article>
    </div>
  );
}
