import Prompt from "./Prompt";

export default function PromptList(props){
  const{result, setResult}= props;

  console.log(result);
  return(
    <section className="prompt-list">
      <Prompt/>
      <Prompt/>
    </section>
  )
}