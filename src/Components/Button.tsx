function Button () {
  return (
    <button
      type="button"
      className="btn btn-primary btn-lg"
      onClick={() => console.log("Button pressed")}
    >
      Sign in
    </button>
  );
}
export default Button;