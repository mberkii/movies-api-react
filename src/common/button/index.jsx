import './style.css'

const Button = ({text, onClick, inverseStyle}) => {
    return (
        <button
            type="submit"
            className={`button${inverseStyle ? ' inverse' : ''}`}
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default Button
