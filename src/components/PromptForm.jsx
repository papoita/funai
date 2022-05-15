export default function PromptForm(){
  const placeholderString = "Write a catchline for a new bakery";

  function handleSubmit(e){
    e.preventDefault();
    console.log('you clicked submit');
  }

  return (
    <section className="newPrompt">
      <form method="post" action="/prompts" className="newprompt_form" onSubmit={handleSubmit}>
      <textarea className="form_textarea" name="text" placeholder={placeholderString}></textarea> <input tpe="submit" value="Prompt" className="form_input"></input>
      </form>
    </section>
  )
}