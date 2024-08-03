

function Button () {
  return (
    <button
      type="button"
      className="btn btn-success btn-lg"
      onClick={() => console.log("Button pressed")}
    >
      Sign in
    </button>
  );
}
export default Button;