import {BUTTON_TYPE_CLASSES} from "../button/button.component";
import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js";
import {FormContainer, PaymentButton, PaymentFormContainer} from "./payment-form.styles";
import {useSelector} from "react-redux";
import {selectCartTotal} from "../../store/cart/cart.selector";
import {selectCurrentUser} from "../../store/user/user.selector";
import {useState} from "react";


const PaymentForm = () => {
    const stripe = useStripe()
    const elements = useElements()
    //useStripe and useElements are important for stripe payment

    const amount = useSelector(selectCartTotal)
    const currentUser= useSelector(selectCurrentUser)
    const [isProcessingPayment, setIsProcessingPayment] = useState(false)


    const paymentHandler = async (e) => {
        e.preventDefault()
        if (!stripe || !elements) {
            return
        }
        setIsProcessingPayment(true)
        const response = await fetch("/.netlify/functions/create-payment-intent", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                amount: amount*100
            })
        }).then(res => res.json())

        const {paymentIntent:{client_secret}}=response
        console.log(client_secret)

        const paymentResult = await stripe.confirmCardPayment(client_secret,{
            payment_method:{
                card: elements.getElement(CardElement),
                billing_details:{
                    name: currentUser ? currentUser.displayName : "Guest"
                }
            }
        })

        setIsProcessingPayment(false)

        if (paymentResult.error){
            alert(paymentResult.error)
            console.log(paymentResult.error)
        }else {
            if(paymentResult.paymentIntent.status==="succeeded"){
                alert("payment successful")
                console.log("success")
            }
        }
        //payment intent
    }
    return (
        <PaymentFormContainer>
            <FormContainer onSubmit={paymentHandler}>
                <h2>Credit Card Payment:</h2>
                <CardElement/>
                <PaymentButton
                    isLoading={isProcessingPayment}
                    buttonType={BUTTON_TYPE_CLASSES.inverted}
                >
                    Pay now
                </PaymentButton>
            </FormContainer>
        </PaymentFormContainer>
    )
}
export default PaymentForm