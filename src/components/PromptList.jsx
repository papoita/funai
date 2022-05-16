import { FaRegHeart, FaRegThumbsDown } from "react-icons/fa";

export default function PromptList(props) {
  const { results } = props;

  return (
    <section className="prompt-list">
      {results.map((x) => (
        <article className="prompt">
          <header>
            <h2 className="prompt-type">type</h2>
          </header>
          <div className="prompt-body">{x.text}</div>
          <footer className="prompt-footer">
            <span className="footer-age">{x.date}</span>
              <div className="footer-icons">
                <FaRegThumbsDown className="thumbs-down-icon" />
                <FaRegHeart className="heart-icon" />
              </div>
          </footer>
        </article>
      ))}
    </section>
  );
}
