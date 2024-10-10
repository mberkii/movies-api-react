import './style.css'

const Input = ({name, attributes, labelText}) => {
    return (
        <>
            <label htmlFor={name}>{labelText}</label>
            <input id={name} {...attributes} className="input" />
        </>
    )
}

export default Input
