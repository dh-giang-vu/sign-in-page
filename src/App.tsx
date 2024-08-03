import Logo from "./Components/Logo";
import Textbox from "./Components/Textbox";
import FormComponent from "./Components/FormComponent";
import Button from "./Components/Button";
import './App.css';

function App() {
  return (
    <>
      <Textbox color="black" fontSize={20} content="Sign in with your University of Melbourne account to access Student Portal" />
      <Logo />
      <Textbox color="black" fontSize={20} fontWeight="bold" content="Log In" />

      <div className="form">
        <FormComponent title="Username" example="e.g. jsmith (not email address)"/>
        <FormComponent title="Password" example="e.g. jsmith123" inputType="password"/>
      </div>

      <Button />
    </>
  )
}

export default App;