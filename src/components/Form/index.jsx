import InputForm from "./InputForm";
import FormTitle from "./FormTitle";

const Form = (props) => {
    return (
        <>
            <FormTitle text={props.title} />
            <form onSubmit={props.handleSubmit} className="formulario">
                {props.inputs.map(input => (
                    <InputForm
                        onChange={props.onChange}
                        key={input.id}
                        id={input.id}
                        name={input.name}
                        value={input.value}
                        type={input.type}
                        label={input.label}
                        placeholder={input.placeholder} 
                        text={input.text}/>
                ))}
            </form>
        </>
    )
}

export default Form;