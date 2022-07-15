import {FormInputLabel,Input,Group} from './form-input.styles'
const FormInput = ({label, ...otherProps})=>{
    return(
        <Group>
            <Input {...otherProps}/>
            {label &&( //if label exist, then render this label
                <FormInputLabel shrink={otherProps.value.length}>{label} </FormInputLabel>
            /* the code above is for shrinking the label when you start typing. so If the length on the value is more
            than 1, toggle shrink class*/
            )}



        </Group>
    )
}
export default FormInput