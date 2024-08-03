import Logo from "./Components/Logo";
import Textbox from "./Components/Textbox";
import FormComponent from "./Components/FormComponent";
import Button from "./Components/Button";
import "./App.css";

function App() {
  return (
    <div className="main-div">
      <Textbox
        color="white"
        fontSize={15}
        content="Sign in with your University of Melbourne account to access Student Portal"
      />
      <Logo />
      <div className="center">
        <Textbox
          color="white"
          fontSize={20}
          fontWeight="bold"
          content="Log In"
        />
      </div>

      <div className="form">
        <FormComponent
          title="Username"
          example="e.g. jsmith (not email address)"
        />
        <FormComponent
          title="Password"
          example="e.g. jsmith123"
          inputType="password"
        />
      </div>

      <Button />
    </div>
  );
}

export default App;
