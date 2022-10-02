import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios"
import React, { useState } from 'react'
import './Master.css'

const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#3e387a",
			color: "#3e387a",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "20px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#fce883" },
			"::placeholder": { color: "#3e387a" }
		},
		invalid: {
			iconColor: "#ffc7ee",
			color: "#ffc7ee"
		}
	}
}

export default function PaymentForm() {
    const [success, setSuccess ] = useState(false)
    const [amount, setAmount ] = useState(0)
    const [description, setDescription] = useState("")
    const [email, setEmail] = useState("")
    const stripe = useStripe()
    const elements = useElements()


    const handleSubmit = async (e) => {
        e.preventDefault()
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })


    if(!error) {
        try {
            const {id} = paymentMethod
            let formattedAmount
            if (amount.charAt(0) === "$"){
                if (amount.includes('.')){
                    formattedAmount = amount.substring(1).replace('.','')
                }
                else{
                    formattedAmount = amount.substring(1) + '00'
                }
            }
            else{
                if (amount.includes('.')){
                    formattedAmount = amount.replace('.','')
                }
                else{
                    formattedAmount = amount +'00'
                }
                
            }
            const response = await axios.post("http://localhost:8000/payment", {
                amount: formattedAmount,
                id,
                description,
                receipt_email:email,

            })

            if(response.data.success) {
                console.log("Successful payment")
                setSuccess(true)
            }

        } catch (payError) {
            console.log("Error", payError)
        }
    } else {
        console.log(error.message)
    }
}

    return (
        <>
        {!success ? 
        <form className='payment-form' onSubmit={handleSubmit}>
            <fieldset className="FormGroup">
                <div className="FormRow">
                    <CardElement className="card-element" options={CARD_OPTIONS}/>
                </div>
            </fieldset>
            <div className="don-wrap">
                <div className="inp-dynamic">
                    <div className="inp-wrap">
                        <div className="inp-flex">
                            <label>Amount:</label>
                            <input type='text' id="amount" onChange={e=>setAmount(e.target.value)} defaultValue='$0' className="don-input"></input>
                        </div>
                        <div className="inp-flex">
                            <label>Email:</label>
                            <input type='text' id="email" onChange={e=>setEmail(e.target.value)} className="don-input"></input>
                        </div>
                    </div>
                    <div className="don-area">
                        <div className="area-flex">
                            <label>Note:</label>
                            <textarea id="description" rows="5" onChange={e=>setDescription(e.target.value)} className="area-input"></textarea>
                        </div>
                    </div>
                </div>
                <button className='btn btn-outline-primary payment-button shadow-none'>Donate</button>
                
            </div>
        </form>
        :
        <div>
            <h5>Thank you so much for your donation!</h5>
            <p> you will receive a receipt shortly </p>
        </div> 
        }
        
        </>
    )
}