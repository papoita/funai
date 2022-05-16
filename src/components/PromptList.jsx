import { FaRegHeart, FaRegThumbsDown } from "react-icons/fa";

export default function PromptList(props) {
  const { result } = props;

  return (
    <div>
      {result.map((x) => (
        <article className="prompt">
          <header>
            <h2 className="prompt-type">type</h2>
          </header>
          <div className="prompt-body">{x.text}</div>
          <footer className="prompt-footer">
            <small className="footer-age">{x.date}</small>
            <small>
              <span className="footer-actions">
                <a href="one">
                  <i className="thumbs-down-icon">
                    <FaRegThumbsDown />
                  </i>
                </a>
                <a href="one">
                  <i className="heart-icon">
                    <FaRegHeart />
                  </i>
                </a>
              </span>
            </small>
          </footer>
        </article>
      ))}
    </div>
  );
}
