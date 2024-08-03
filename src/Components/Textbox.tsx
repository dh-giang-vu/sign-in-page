interface TextBoxProps {
  color: string,
  fontSize: number,
  fontWeight?: string,
  content: string
}

function Textbox({ color, fontSize, fontWeight="normal", content }: TextBoxProps) {
  const tbStyle = {
    color: color,
    fontSize: fontSize + "px",
    fontWeight: fontWeight
  };

  return (
    <p style={tbStyle}>{content}</p>
  )
}
export default Textbox;
