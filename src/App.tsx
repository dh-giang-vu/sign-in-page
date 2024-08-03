import Logo from "./Components/Logo";
import Textbox from "./Components/Textbox";
import './App.css';

function App() {
  return (
    <>
      <Textbox color="black" fontSize={20} content="Sign in with your University of Melbourne account to access Student Portal" />
      <Logo />
      <Textbox color="black" fontSize={20} fontWeight="bold" content="Log In" />
    </>
  )
}

export default App;