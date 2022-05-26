import './form-input.styles.scss'
const FormInput = ({label, ...otherProps})=>{
    return(
        <div className={'group'}>
            <input className={'form-input'} {...otherProps}/>
            {label &&( //if label exist, then render this label
                <label className={`${otherProps.value.length ? 'shrink':null} form-input-label`}>{label} </label>
            /* the code above is for shrinking the label when you start typing. so If the length on the value is more
            than 1, toggle shrink class*/
            )}



        </div>
    )
}
export default FormInput