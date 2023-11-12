import './Button.css'

const ButtonComponent = (props) => {
    return (<button className='button'>
        {props.children}
    </button>)
}

export default ButtonComponent