import './button.styles.scss'
//to be able to get different styling with this sign button component,
//I will need a way to control it using a class. I will use a variable

const BUTTON_TYPES_ClASSES ={
    google: 'google-sign-in',
    inverted: 'inverted'
}

export default function Button({children, buttonType,...otherprops}){
    return(
        <button className={`button-container ${BUTTON_TYPES_ClASSES[buttonType]}`}
                {...otherprops}
        >
            {/*//the square bracket is a way of accessing the object key*/}
            {children}
        </button>
    )
}