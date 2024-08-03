import Textbox from "./Textbox";

interface FormComponentProps {
  title: string,
  example: string,
  inputType?: string
}

function FormComponent({ title, example, inputType="text" }: FormComponentProps) {
  return (
    <div>
      <Textbox color="black" fontSize={15} fontWeight="bold" content={title}/>
      <Textbox color="black" fontSize={15} content={example}/>
      <input type={inputType} />
    </div>
  );
}
export default FormComponent;
