import "bootstrap/dist/css/bootstrap.css"
import "./App.css"
import Newsletter from "send-suscriptor-mailchimp-react"
import GithubCorner from 'react-github-corner';

const App = () => {

  const todo = {
    formClassName: 'container mt-2', // Opcional - Optional
    inputEmailClassName:"input-email", // Opcional - Optional
    inputSubmitClassName: "btn btn-primary", // Opcional - Optional
    valueSubmit : 'Suscribe!', // Opcional - Optional
    listMailchimp: 'https://outlook.us6.list-manage.com/subscribe/post?u=5f8afe65a28ad5a1c9b1aae72&amp;id=1e9f07f5d8', // Obligatorio - Mandatory
    messageSucces: 'Bien hecho! Ya estas suscripto', // Obligatorio - Mandatory
    messageError: 'Hubo un error y no lo pudimos completar, tal vez es porque ya estas suscripto!', // Obligatorio - Mandatory
    messageClassName: "text-center text-white pt-3" // Opcional - Optional
  }

  return (
    <>
    <GithubCorner href="https://github.com/tbor00/send-suscriptor-mailchimp-react"/>
    <div className="container">
      <h2 className="text-white pt-5 text-center">Newsletter</h2>
      <p className="text-white text-center">Suscribe in newsletter</p>
      <div className="d-flex align-items-center justify-content-center">
        <Newsletter info={todo}/>
      </div>
    </div>
    </>
  )
}

export default App;
