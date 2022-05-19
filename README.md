@[papoita](https://github.com/papoita) | version 1.0.0

# FunAI project / [inspirAItion app](https://inspiraition.netlify.app/)

This project was completed by [Paola Perez Leiva](https://www.linkedin.com/in/perezleivapaola/) as part of a job application challenge. It also became an exercise into consolidating abilities as a software developer. 

## InspirAItion 
Is a web application that allows users to submit text and get a completion response from OpenAI API. They can like the post and they see the response ordered from newest to oldest.

## Features:

* A dropdown menu provides example prompt recommendations allowing the UI to guide the user. It automatically fills the textarea with the user's selection.

* The user can modify the placeholder and add any desired input in the textarea.

* The user can reset the form and clear the textarea.

* A loading gif will render while response is obtained from the API to improve the UX.

* The response from the API is rendered from newest to oldest in a humanized manner, showing the date and the timeago it was created.

* There is a clickable heart icon that will change color if the user likes/unlikes the post response.

* The interface is simple, straightforward and responsive. 

* Links to the repo and linkedin of the developer are included in the footer.

## Techstack
  
 💡 This frontend project is built with React, React-Bootstrap, Bootstrap, Sass, React-icons library.

 💡 App is tested using Jest for component rendering and Cypress for end-end. 

 💡 Users can communicate with an API server over HTTP, using Axios.

 💡 Deployed and live using Netlify: [InspirAItion](https://inspiraition.netlify.app/)

## Screenshots

### InspirAItion UI v2
!["v2"](/docs/UI_2.png)

### InspirAItion UI v1
!["v1"](/docs/inspirAItion.png)



## [OpenAI API](https://beta.openai.com/docs/introduction)

The [completion](https://beta.openai.com/docs/guides/completion) endpoint combined with `text-curie-001` engine were selected to provide cheap, fast and accurate completion responses. 

> _"...You input some text as a prompt, and the model will generate a text completion that attempts to match whatever context or pattern you gave it. For example, if you give the API the prompt, “Write a tagline for an ice cream shop”, it will return a completion like “We serve up smiles with every scoop!”_


# Setup

## Running funai

Install dependencies 
```sh
npm install
```

Run funai repo at port 3000

```sh
npm start
```


### Dependencies
* axios
* openai
* react
* react-bootstrap
* bootstrap
* sass
* react-scripts
* timeago
* react-dom
* react-icons
* testing-library-react
* cypress



## Running Jest Test Framework

```sh
npm run test
```

## Running Cypress end-end testing

```sh
npm run cypress:open
```
