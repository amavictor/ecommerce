import {
    BaseButton,
    GoogleSignInButton,
    InvertedButton
} from './button.styles'
//to be able to get different styling with this sign button component,
//I will need a way to control it using a class. I will use a variable

export const BUTTON_TYPE_CLASSES = {
    base: 'base',
    google: 'google-sign-in',
    inverted: 'inverted',
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
    ({
        [BUTTON_TYPE_CLASSES.base]: BaseButton,
        [BUTTON_TYPE_CLASSES.google]: GoogleSignInButton,
        [BUTTON_TYPE_CLASSES.inverted]: InvertedButton,
    }[buttonType]);

export default function Button({children, buttonType,...otherprops}){
    const CustomButton = getButton(buttonType)
    return(
        /*<button className={`button-container ${BUTTON_TYPES_ClASSES[buttonType]}`}
                {...otherprops}
        >
            {/!*!//the square bracket is a way of accessing the object key*!/}
            {children}
        </button>*/
        <CustomButton {...otherprops}>{children}</CustomButton>
    )
}