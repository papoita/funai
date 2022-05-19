import Prompt from "./Prompt";

export default function PromptList(props) {
  const { results, loading, setResults } = props;
  

  if (loading) {
    return (
      <section className="prompt-list w-75 m-4">
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
      {results.map((el) => (
        <Prompt key={el.id} {...el} setResults={setResults} />
      ))}
    </section>
  );
}
