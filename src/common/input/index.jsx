import './style.css'

const Input = ({name, attributes, labelText}) => {
    return (
        <>
            {labelText && <label htmlFor={name}>{labelText}</label>}
            <input id={name} name={name} {...attributes} className="input" />
        </>
    )
}

export default Input
