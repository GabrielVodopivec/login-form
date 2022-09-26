import { Link } from "react-router-dom";

const InputForm = (props) => {

  const label = <label htmlFor={props.id}>{props.label}</label>;
  const inputField = 
  <input
    id={props.id}
    type={props.type}
    name={props.name}
    value={props.value}
    placeholder={props.placeholder}
    autoComplete={props.autoComplete || "off"}
    onChange={props.onChange}
  />;
  const inputButton = <button type="submit">{props.text}</button>;
  const linkButton = <button type="buttton">{props.text}</button>
  if (props.type === "submit") {
    return (inputButton);
  }

  if (props.type === "button") {
    return (
      <Link to="/register">
        {linkButton}
      </Link>
    )
  }

  return (
    <div>
      {label}
      {inputField}
    </div>
  )
}

export default InputForm;